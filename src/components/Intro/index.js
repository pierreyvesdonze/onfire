export default function Intro() {
    return (
        <section className="intro-section">
            <h1>Le feu</h1>
            <div className="flex-left-right">
                <div className="flex-left intro-text">
                    <h2>Triangle du feu : </h2>
                    <div>- Combustible</div>
                    <div>-- Comburant</div>
                    <div>--- Énergie</div>
                    <h2>Température :</h2>
                    <div>200°C à + de 10 000°C</div>
                </div>
                <div className="flex-right intro-bg-container">
                </div>
            </div>
        </section>
    )
}