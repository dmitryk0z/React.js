import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {
    const cardComp = data.map(card => {
        return (
            <Card
                key={card.id}
                card={card}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardComp}
            </section>
        </div>
    )
}