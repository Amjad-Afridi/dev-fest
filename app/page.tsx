import EventButton from "@/components/EventButton"
import EventComponent from "@/components/EventComponent"
import { events } from "@/lib/constants"


const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold">
        Welcome to The Dev Fest App
        </h1>
        <p className="text-lg">
            This is the best app for the dev fest where you can find all the information about the event.
        </p>
        <EventButton title="Events" className="mt-4"/>
        <div>
            <h3 className="text-lg font-bold"> Featured Events</h3>
            <ul className="mt-4 flex flex-wrap gap-4">
                {events.map((item) => (
                    <li key={item.slug}>
                        <EventComponent title={item.title} date={item.date} time={item.time} location={item.location} image={item.image} description={item.description} slug={item.slug} />
                    </li>
                ))}
            </ul>
        </div>
    </section>
    
  )
}

export default HomePage