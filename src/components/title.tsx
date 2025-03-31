


type TitleProps ={

    className: string;
    teamNum: number;
    hobby1: string;
    hobby2:string;


}

const Title=({className,teamNum,hobby1,hobby2}:TitleProps)=>{
    return(
        <header>
            <h1>{className} Team {teamNum}: {hobby1} and {hobby2}</h1>
        </header>
    );
};

export default Title;