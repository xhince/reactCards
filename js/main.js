function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Mert" age="28" />
        <Person name="MErt II" age="29" />
        <Person name="MeRt III" age="3" />
        <Person name="MeRT IV" age="4" />
        <Person name="mERT V" age="6" />
        <Person name="mErT VI" age="7" />
        <Person name="meRT VII" age="6" />

        <Person name="Haloo" age="zetsu white" />
        <Person name="Haloo" age="zetsu black" />
        <Person name="Haloo" age="zetsu all in one" />
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));

function shoot() {
    alert("Great Shot!");
}
const myelement = (
    <button onClick={shoot}>Take the shot!</button>
);

ReactDOM.render(myelement, document.getElementById('root'));
