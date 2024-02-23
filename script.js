const calculatetemp=()=>{
    //console.log("shubham");
    const numberTemp=document.getElementById('temp').value;
    //console.log(numberTemp);
    const tempselector=document.getElementById('temp_def');
    //console.log(tempselector);
    const valuetemp=temp_def.options[tempselector.selectedIndex].value;
    //console.log(valuetemp);
    const calTofah =(cal)=>{
        let fah=  ((cal*9/5)+32);
        return fah;

    }
    const fahTocal=(fah)=>{
        let cal=((fah-32)*9/5);
        return cal;
    }
    let result;
    if(valuetemp=='cal'){
        result=calTofah(numberTemp);
        console.log(result);
        document.getElementById('resultcontainer').innerHTML=` = ${result}°Fahrenheit`;
    }
    else{
    result=fahTocal(numberTemp);
    console.log(result);
    document.getElementById('resultcontainer').innerHTML = ` = ${result}°Celsius`;
}
}