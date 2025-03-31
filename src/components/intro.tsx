type IntroProps ={

    name1: string;
    name2: string;
}

const Intro=({name1, name2}:IntroProps)=>{
    return (
        <p>
            Hi friends, welcome to our website! {name1} and {name2} will show our hobbies in this webpage!
        </p>
    );
};

export default Intro;