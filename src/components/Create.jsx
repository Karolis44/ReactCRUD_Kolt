import { useState } from "react";
import * as C from './constants';

export default function Create() {


    const [kolt, setkolt] = useState(C.defaultKolt);

    const handleKolt = e => {
        let value = e.target.value;

        if (e.target.name === 'totalridekm') {
            value = parseFloat(value).toFixed(2);
        }

        setkolt({ ...kolt, [e.target.name]: value });
    };




    return (
        <div className="create-template">

            <div className="topic"> Suveskite paspirtuko Duomenis</div>
            <div>
                <label className="kolt-id">ID:</label>
                <input type="text" name="id" className="kolt-id-ctrl" onChange={handleKolt} value={kolt.id} />
            </div>
            <div>
                <label className="kolt-code">Registration code:</label>
                <input type="text" name="code" className="kolt-code-ctrl" min={10000000} max={99999999} onChange={handleKolt} value={kolt.code} />
            </div>
            <div>
                <div class="radio">
                    Is busy
                    <label class="busy">
                        <input type="radio" data-group="choice" data-option="yes" name="busy" className="kolt-busy-ctrl" onChange={handleKolt} value={kolt.busy} /> Taip
                    </label>
                    <label>
                        <input type="radio" data-group="choice" data-option="no" name="busy" className="kolt-busy-ctrl" onChange={handleKolt} value={kolt.busy} /> Ne
                    </label>

                    {/* <input type="radio" name="busy" className="kolt-busy-ctrl" onChange={handleKolt} value={kolt.busy} />   */}
                </div>

                {/* <input type="radio" name="busy" className="kolt-busy-ctrl" onChange={handleKolt} value={kolt.busy} /> */}
            </div>
            <div>
                <label className="kolt-date">Last use time date:</label>
                <input type="date" name="lastusedate" className="kolt-date-ctrl" onChange={handleKolt} value={kolt.lastusedate} />
            </div>
            <div>
                <label >Total Ride Kilometres: <b class="kolt-totalkm">{kolt.totalridekm}km</b></label>
                <input type="range" class="ranger" name="totalridekm" className="kolt-totalkm-ctrl" min={1} max={5000} step={0.01} onChange={handleKolt} value={kolt.totalridekm} />
            </div>

            <button className="green" >Įrašyti duomenis</button>

        </div>
    );
}
