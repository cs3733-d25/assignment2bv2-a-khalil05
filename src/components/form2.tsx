const Form2: React.FC = () => {
    return (
        <div>
            <form>
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" />
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" />
                <br />
                <br />
                <label htmlFor="glamtype">What type of glam would you like?</label>
                <select id="glamtype" name="glamtype">
                    <option value="bridal">Bridal</option>
                    <option value="banana">Prom</option>
                    <option value="naturalglam">Natural Glam</option>
                    <option value="boldglam">Bold Glam</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <br />
                How will you be paying?
                <br />
                <input type="radio" id="card" name="paymentmethod" value="card" />
                <label htmlFor="card">Credit/Debit Card</label>
                <br />
                <input type="radio" id="online" name="paymentmethod" value="online" />
                <label htmlFor="online">Venmo/Zelle/Cashapp</label>
                <br />
                <input type="radio" id="cash" name="paymentmethod" value="cash" />
                <label htmlFor="cash">Cash</label>
                <br />
                <br />
                <label htmlFor="comments">Questions and Comments:</label>
                <br />
                <textarea rows={4} cols={50} id="comments"></textarea>
                <br />
                <br />
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement">
                    I agree to the terms and conditions, including the cancellation policy and payment requirements.
                </label>
                <br />
                <input type="checkbox" id="promotexts" />
                <label htmlFor="promotexts">
                    I would like to receive text messages about promotions and special offers.
                </label>
                <br />
                <input type="checkbox" id="reminders" />
                <label htmlFor="reminders">
                    I would like to receive text messages with booking reminders and updates.
                </label>
                <br />
                <button type="submit" id="submitButton">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form2;
