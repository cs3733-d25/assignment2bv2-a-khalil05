const List1: React.FC = () => {
    return (
        <div className="list-container">
            <h3>My Top Favorite Exercises:</h3>
            <ol>
                <li style={{ color: "red" }}>Bicep: Curls</li>
                <li>Back: Lateral Pulldowns</li>
                <li>Leg: Smith Squats</li>
                <li>Leg: Leg Extension</li>
                <li>Tri: Tri-Pushdowns</li>
                <li>Chest: Bench</li>
                <li>Shoulder: Shoulder Press</li>
            </ol>
        </div>
    );
};

export default List1;