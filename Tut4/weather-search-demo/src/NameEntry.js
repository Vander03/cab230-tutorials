import { useState, useContext, useEffect } from 'react';
import MyCtx from './MyCtx';

export function NameEntry(props) {
    const [name, setName] = useState("");
    const update = useContext(MyCtx);
    const [searchEntries, setSearchEntries] = useState([]);

    // const searchEntries = [
    //     { entry: "Brisbane, Queensland, Australia", id: 128775 },
    //     { entry: "Bristol, Bristol, United Kingdom", id: 2782977 },
    // ];

    useEffect(() => {
        if (name !== "") {
            fetch(`http://api.weatherapi.com/v1/search.json?key=636199d97ce2419b861204940231603&q=${name}`)
            .then(r => r.json())
            .then(j => {
                
                console.log(j);
    
                setSearchEntries(j.map(
                    e => {
                        return {
                            id: e.id,
                            entry: `${e.name}, ${e.region}, ${e.country}`,
                        };
                    }
                ));
            });
        }
    }, [name]);

    return (
        <form onSubmit={
            e => {
                e.preventDefault();
            }
        }>
            <input type="text" name="name" value={name} onChange={
                e => {
                    setName(e.target.value);
                }
            } />
            <ul>
                {searchEntries.map(s =>
                    <li>
                        <a href="#" onClick={e => {
                            e.preventDefault();
                            update(s.id);
                        }}>
                            {s.entry}
                        </a>
                    </li>
                )}
            </ul>
        </form>
    );
}
