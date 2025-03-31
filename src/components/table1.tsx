const Table1: React.FC=() => {

    return (

        <div>

        <table>

            <caption>
                The Best Exercises for The Main Muscle Group
            </caption>
            <br />

            <tr>
                <th> Muscle Group</th>
                <th> Hardest Exercise</th>
                <th> Easiest Exercise</th>

            </tr>

            <tr>
                <td>Legs</td>
                <td>Barbell/Smith Squats</td>
                <td>Calf Raises</td>
            </tr>

            <tr>
                <td>Back</td>
                <td>Lateral Pulldown</td>
                <td>Rows</td>
            </tr>

            <tr>
                <td>Chest</td>
                <td>Bench</td>
                <td>Pec Fly</td>
            </tr>

            <tr>
                <td>Shoulder</td>
                <td>Shoulder Press</td>
                <td>Flys</td>
            </tr>

            <tr>
                <td>Tri</td>
                <td>Over head Extension</td>
                <td>Pushdowns</td>
            </tr>


        </table>

        </div>
    );
};



export default Table1;




