//hobby of first person
//has image of thier hobby
//list1.tsx (assignment 1b)
//table1.tsx(table from assignemnt 1b)
//form.tsx (form from assignemnt 1b)

import List1 from  "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";


type HobbyProps = {

    name: string;
    hobby: string;
    image:string;
}

const Hobby1=({name, hobby, image}:HobbyProps)=>{
    return (
        <div>
            <h2>
                {name}'s Hobby is: {hobby}
            </h2>
            <img src={image} alt={hobby} width="200"/>
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
};

export default Hobby1;