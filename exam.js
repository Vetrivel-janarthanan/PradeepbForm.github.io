alert(`Hi User,  :-)
Click okay to  answer all the Questions 
`)

let position=0;
let correct=0;
//? let creating the array for the questions and the answers
let array=[

    //! biology
    ['1. process of growth is maximum during :',"Log phase","Lag phase","Senescence", "A" ],
    ["2.In which of the following techniques, the embryos are transferred to assist those females who cannot conceive ?","AZIFT and IUT","BGIFT and ZIFT","CICSI and ZIFT","A" ],
    ["3.The plant parts which consist of two generations - one within the other:(a) Pollen grains inside the anther(b) Germinated pollen grain with two male gametes(c) Seed inside the fruit(d) Embryo sac inside the ovule","(a) only","(a) and (d)","(a), (b) and (c)","B" ],
    ["4.Meiotic division of the secondary oocyte is complete","Prior to ovulation","At the time of copulation","At the time of fusion of a sperm with an ovum","C" ],
    ["5.Bilaterally symmetrical and acoelomate animals are exemplified by :","Platyhelminthes","Aschelminthes","Ctenophora","A"],
    ["6.Identify the wrong statement with reference to transport of oxygen","Binding of oxygen with haemoglobin is mainly related to partial pressure of O2","Partial pressure of CO2 can interfere with O2 binding with haemoglobin.","Higher H+ cone, in alveoli favours the formation of oxyhaemoglobin.","C"],
    ["7.Ray florets have:","Inferiorovary","Superior ovary","Half inferior ovary","A"],
    ["8.The specific palindromic sequence which is recognized by EcoRI is","5' - GAATTC -3'  3' - CTTAAG -5'"," 5' - GGAACC -3'  3' - CCTTGG-5'"," 5' - GGATCC - 3'  3' - CCTAGG - 5'","A"],
    ["9.According to Robert May, the global species diversity is about:","1.5 million","7 million","50 million","B"],
    ["10.Select the correct events that occur during inspiration.(a) Contraction of diaphragm(b) Contraction of external inter - costal muscles(c) Pulmonary volume decreases(d) Intra pulmonary pressure increases","(a) and (b)","(c) and (d)","(a), (b) and (c)","A"],

//! physics
    ["11.The ratio of contributions made by the electric field and magnetic field components to the intensity of an electromagnetic wave is : (c = speed of electromagnetic waves)","c : 1","1 : 1","1 : c","B"],
    ["12.A body weighs 72 N on the surface of the earth. What is the gravitational force on it, at a height equal to half the radius of the earth?","30 N","40 N","32 N","C"],
    ["13.The solids which have negative temperature coefficient of resistance are :","insulators and semiconductors","semiconductors only","insulators only","A"],
    ["14.A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale.The pitch of the screw gauge is:","0.5 mm ","0.01 mm","0.05 mm","A"],
    ["15.The increase in the width of the depletion region in a p-n junction diode is due to :","increase in forward current","forward bias only"," reverse bias only","C"],
    ["16.Light of frequency 1.5 times the threshold frequency is incident on a photosensitive material. What will be the photoelectric current if the frequency is halved and intensity is doubled?","zero","doubled","one-fourth","A"],
    ["17.In Young’s double slit experiment, if the separation between coherent sources is halved and the distance of the screen from the coherent sources is doubled, then the fringe width becomes:","double","four-times","half","B"],
    ["18.Two cylinders a and b of equal capacity are connected to each other via a stop clock.A contains an ideal gas at the standard temperature and the pressure.B is completely evacuated .the entire system is thermally insulated .the stop cock is suddenly opened.this process called? ","isothermal","isochoric","adiabatic","C"],
    ["19.A ball is thrown vertically downward with a velocity of 20m/s from the top of a tower. It hits the ground after some time with a velocity of 80m/s. The height of the tower is :","300 m","320 m","340 m","A"],
    ["20.A capillary tube of radius r is immersed in water and water rises in it to a height h. The mass of the water in the capillary is 5g. Another capillary tube of radius 2r is immersed in water. The mass of water that will rise in this tube is :","2.5 g","10.0 g","20.0 g","B"],

//! chemistry
    ["21.An element has a body centered cubic (bcc) structure with a cell edge of 288 pm. The atomic radius is:","2√4×288pm","42√×288pm","3√4×288pm","C"],
    ["22.On electrolysis of dil.sulphuric acid using Platinum (Pt) electrode, the product obtained at anode will be:","Oxygen gas","SO2 gas"," H2S gas","A"],
    ["23.Reaction between acetone and methyl magnesium chloride followed by hydrolysis will give :","Sec. butyl alcohol","Isobutyl alcohol","Tert. butyl alcohol","C"],
    ["24.The calculated spin only magnetic moment of Cr2+ ion is :","3.50 BM","4.90 BM","5.76 BM","B"],
    ["25.Reaction between benzaldehyde and acetophenone in presence of dilute NaOH is known as:","Cannizzaro's reaction","Cross Cannizzaro's reaction","Cross Aldol condensation","C"],
    ["26.Paper chromatography is an example of :","Partition chromatography","Thin layer chromatography","Column chromatography","A"],
    ["27.An increase in the concentration of the reactants of a reaction leads to change in :","activation energy","threshold energy","collision frequency","C"],
    ["28.Which of the following is cationic detergent?"," Cetryltrimethyl ammonium bromide","Sodium dodecylbenzene sulphonate","Sodium stearate","A"],
    ["29.Which of the following is a basic amino acid ?","Alanine","Lysine","Tyrosine","B"],
    ['30.Formula for washing soda <i class ="fas fa-smile-wink" style="color:yellow"></i>  <i class ="fas fa-smile-wink" style="color:yellow"></i>  <i class ="fas fa-smile-wink" style="color:yellow"></i> ',"Na3CO2","Na2CO3","NaCO2","B"]
]
//? creating the function for displaying the question
function displayQuestion(){

  
    let question=document.getElementById("question");
   let option1=document.getElementById("option1");
   let option2=document.getElementById("option2");
   let option3=document.getElementById("option3");
   let button=document.getElementById("button")
  


    //? checking  weather the question is greater than the length

  


    if(position>=array.length){
     
    let information=document.getElementById("information");
    information.innerHTML="your Examination is over and your score is :"
    let marks=document.getElementById("marks");
    let remarks=document.getElementById("remarks")
    let mc=document.getElementById("mc");
    mc.style.display="none"
    question.style.display="none";
    marks.innerHTML=`You got <i class="fas fa-hand-point-down ms-2" ></i> </br></br> ${correct}/${array.length}`
    remarks.innerHTML=`<i class="fas fa-handshake" style="color:black"></i>  Welldone!! </br> READ MORE AND PRACTICE MORE`
    
    return 
    }

 
   let a=array[position][1];
   let b=array[position][2];
   let c=array[position][3];
   
   
   question.innerHTML=array[position][0];  
   option1.innerHTML=`<label><input class="me-2" type="radio" name="choice" value="A">${a}</label>`;
   option2.innerHTML=`<label><input class=" me-2" type="radio" name="choice" value="B">${b}</label>`;
   option3.innerHTML=`<label><input class=" me-2" type="radio" name="choice" value="C">${c}</label>`;
   
   
   button.addEventListener("click",changeQuestion);



   let information=document.getElementById("information");
   information.innerHTML=`<i class="fas fa-question-circle " style="color:#e61ee0"></i> Question ${position+1} of ${array.length} `; 
}
displayQuestion();

//? changing to next question 

function changeQuestion(){
    let answers=document.getElementsByName("choice")
    let choice;
    for(let i=0;i<answers.length;i++){
        if(answers[i].checked){
         choice=answers[i].value;
        }
    }
    console.log(choice,array[position][4]);
    if(choice==array[position][4]){
        correct++
    }
    position++;   
displayQuestion();

}


