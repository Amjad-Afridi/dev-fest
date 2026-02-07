import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  time: string;
  mode: 'online' | 'offline' | 'hybrid';
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    image: {
      type: String,
      required: [true, 'Event image is required'],
      trim: true,
      validate: {
        validator: function(v: string) {
          return /^https?:\/\/.+/.test(v);
        },
        message: 'Image must be a valid URL',
      },
    },
    date: {
      type: Date,
      required: [true, 'Event date is required'],
      validate: {
        validator: function(v: Date) {
          return v >= new Date();
        },
        message: 'Event date must be in the future',
      },
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
      minlength: [3, 'Location must be at least 3 characters long'],
      maxlength: [200, 'Location cannot exceed 200 characters'],
    },
    time: {
      type: String,
      required: [true, 'Event time is required'],
      trim: true,
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM|am|pm)$/, 'Time must be in valid format (e.g., 10:00 AM)'],
    },
    mode: {
      type: String,
      required: [true, 'Event mode is required'],
      enum: {
        values: ['online', 'offline', 'hybrid'],
        message: 'Mode must be either online, offline, or hybrid',
      },
      lowercase: true,
    },
    agenda: {
      type: [String],
      default: [],
      validate: {
        validator: function(v: string[]) {
          return v.length <= 20;
        },
        message: 'Agenda cannot have more than 20 items',
      },
    },
    organizer: {
      type: String,
      required: [true, 'Organizer name is required'],
      trim: true,
      minlength: [2, 'Organizer name must be at least 2 characters long'],
      maxlength: [100, 'Organizer name cannot exceed 100 characters'],
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: function(v: string[]) {
          return v.length <= 10;
        },
        message: 'Cannot have more than 10 tags',
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for optimized queries
EventSchema.index({ slug: 1 }); // Unique index for slug lookups
EventSchema.index({ date: 1 }); // Index for date-based queries
EventSchema.index({ tags: 1 }); // Index for tag-based filtering
EventSchema.index({ mode: 1 }); // Index for mode filtering
EventSchema.index({ createdAt: -1 }); // Index for sorting by creation date
EventSchema.index({ title: 'text', description: 'text' }); // Text index for search

// Virtual for formatted date
EventSchema.virtual('formattedDate').get(function() {
  return this.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

// Pre-save middleware to ensure slug uniqueness
EventSchema.pre('save', async function() {
  if (this.isModified('slug')) {
    const existingEvent = await (this.constructor as Model<IEvent>).findOne({
      slug: this.slug,
      _id: { $ne: this._id },
    });
    if (existingEvent) {
      throw new Error('Slug must be unique');
    }
  }
});

// Prevent model recompilation in development
const Event = (mongoose.models.Event as Model<IEvent>) || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
