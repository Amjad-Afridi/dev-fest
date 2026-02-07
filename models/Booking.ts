import mongoose, { Schema, Document, Model, Types } from 'mongoose';

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
      validate: {
        validator: async function(v: Types.ObjectId) {
          const Event = mongoose.model('Event');
          const event = await Event.findById(v);
          return !!event;
        },
        message: 'Event does not exist',
      },
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: function(v: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Please provide a valid email address',
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Compound index to ensure one booking per email per event
BookingSchema.index({ eventId: 1, email: 1 }, { unique: true });

// Index for querying bookings by event
BookingSchema.index({ eventId: 1 });

// Index for querying bookings by email
BookingSchema.index({ email: 1 });

// Index for sorting by creation date
BookingSchema.index({ createdAt: -1 });

// Virtual to populate event details
BookingSchema.virtual('event', {
  ref: 'Event',
  localField: 'eventId',
  foreignField: '_id',
  justOne: true,
});

// Pre-save middleware to check for duplicate bookings
BookingSchema.pre('save', async function() {
  if (this.isNew) {
    const existingBooking = await (this.constructor as Model<IBooking>).findOne({
      eventId: this.eventId,
      email: this.email,
    });
    if (existingBooking) {
      throw new Error('You have already booked this event');
    }
  }
});

// Static method to get booking count for an event
BookingSchema.statics.getEventBookingCount = async function(eventId: Types.ObjectId) {
  return await this.countDocuments({ eventId });
};

// Static method to check if user has booked an event
BookingSchema.statics.hasUserBooked = async function(eventId: Types.ObjectId, email: string) {
  const booking = await this.findOne({ eventId, email });
  return !!booking;
};

// Prevent model recompilation in development
const Booking = (mongoose.models.Booking as Model<IBooking>) || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
