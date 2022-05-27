import Header from "./components/Header"
import Journey from "./components/Journey"
import data from "./travel-data.js"

export default function App() {
    const journeyComp = data.map(travelDataItem => {
        return (
            <Journey
                key={travelDataItem.id}
                travelDataItem={travelDataItem}
            />
        )
    })
    
    return (
        <div>
            <Header />
            {journeyComp}
        </div>
    )
}