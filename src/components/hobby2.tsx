//hobby of second person
//has image of thier hobby


import List2 from  "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";


type HobbyProps = {

    name: string;
    hobby: string;
    image:string;
}

const Hobby2=({name, hobby, image}:HobbyProps)=>{
    return (
        <div>
            <h2>
                                 {name}'s Hobby is: {hobby}. Awesome right!?
            </h2>
            <img src={image} alt={hobby} width="200"/>
            <List2 />
            <Table2/>
            <Form2 />
        </div>
    );
};

export default Hobby2;