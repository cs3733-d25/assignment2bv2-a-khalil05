const Form1: React.FC=() => {

    return (

        <div>


            <form>
                <label htmlFor="name"> Enter your Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your Name" required/> <br/> <br/>


                <label htmlFor="email"> Enter your Email:</label>
                <input type="text" id="email"  name ="email" placeholder="Enter your Email" required/> <br/> <br/>

                <p>Select the Muscle Group you want to work on:</p>
                <input type="checkbox" id="legs" name="Muscle" value="legs"/>
                <label htmlFor="legs">Legs</label>
                <br/> <br/>
                <input type="checkbox" id="back" name="Muscle" value="back"/>
                <label htmlFor="back">Back</label>
                <br/> <br/>
                <input type="checkbox" id="chest" name="Muscle" value="chest"/>
                <label htmlFor="chest">Chest</label>
                <br/> <br/>
                <input type="checkbox" id="glute" name="Muscle" value="glute"/>
                <label htmlFor="glute">Glute</label>
                <br/> <br/>
                <input type="checkbox" id="shoulder" name="Muscle" value="shoulder"/>
                <label htmlFor="shoulder">Shoulder</label>
                <br/> <br/>
                <input type="checkbox" id="bicep" name="Muscle" value="bicep"/>
                <label htmlFor="bicep">Bicep</label>
                <br/> <br/>
                <input type="checkbox" id="other" name="Muscle" value="other"/>
                <label htmlFor="other">Chest</label>
                <br/> <br/>

                <p>How Experienced are you with Lifting:</p>

                <input type="radio" id="none" name="Experience" value="none"/>
                <label htmlFor="none">None</label>
                <br/> <br/>

                <input type="radio" id="novice" name="Experience" value="novice"/>
                <label htmlFor="novice">Novice</label>
                <br/> <br/>

                <input type="radio" id="intermediate" name="Experience" value="intermediate"/>
                <label htmlFor="intermediate">Intermediate</label>
                <br/> <br/>

                <input type="radio" id="advance" name="Experience" value="advance"/>
                <label htmlFor="advance">Advance</label>
                <br/> <br/>


                <label htmlFor="gym"> How Many Times a Week do you Lift</label>
                <select id="gym" name="gym">
                    <option value="0">0</option>
                    <option value="1-2">1-2</option>
                    <option value="3-4">3-4</option>
                    <option value="4-5">4-5</option>
                    <option value="5-6">5-6</option>
                </select>
                <br/> <br/>

                <label htmlFor="comment">Comments:</label>
                <textarea id="comment" name="comment" rows={4} cols={50}></textarea>

                <br/> <br/>
                <br/> <br/>

                <button type="submit">Submit</button>
            </form>


        </div>
    );
};


export default Form1;