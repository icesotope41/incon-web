import './App.css';

function App() {

    let hidMsg = "in ten years maybe"

    let visible = (id) => {
        var d = document.getElementById(id);

        if (d.style.color == "black") {
            d.style.color =  "rgba(255, 140, 0, 0)";
        } else {
            d.style.color = "black";
        }
        

    }

    return (
        <div className="App">
        
            <h1 className="greeting">Hello!</h1>
            <h2 className="greeting">This is in testing phase.</h2>
            <div className="introText">
                <p>There remains to have many things to come in the future.</p>
                <p className="noselect" id="reveal" onClick={() => visible("reveal")}>{hidMsg}</p>
            </div>
      


        </div>
    );
}

export default App;
