import Image from "next/image";
import Link from "next/link";

interface EventProps {
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
    slug: string;
}

const EventComponent = ({title, date, time, location, image, description, slug}: EventProps) => {
  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 max-w-sm">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-video">
            <Image 
                src={image} 
                alt={title} 
                width={500} 
                height={300} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-4">
            {/* Title */}
            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {description}
            </p>

            {/* Event Details */}
            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-blue-400">📅</span>
                    <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-blue-400">🕒</span>
                    <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-blue-400">📍</span>
                    <span>{location}</span>
                </div>
            </div>

            {/* CTA Button */}
            <Link 
                href={`/events/${slug}`} 
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 mt-4"
            >
                View Details →
            </Link>
        </div>
    </div>
  )
}

export default EventComponent