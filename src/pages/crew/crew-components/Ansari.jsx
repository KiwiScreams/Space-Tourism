import person from "../../../assets/crew/image-anousheh-ansari.png"
function Ansari() {
    return (
        <>
            <div className="contain flex">
                <div className="text-container">
                    <h4 className="heading-4">Flight Engineer</h4>
                    <h1 className="heading-3">Anousheh Ansari</h1>
                    <p className="body-text">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                </div>
                <div className="image-contain">
                    <img src={person} alt="" />
                </div>
            </div>
        </>
    )
}
export default Ansari