const features = [

{
title:"Rainfall Prediction",
desc:"AI predicts rainfall using IMD datasets."
},

{
title:"Temperature Prediction",
desc:"Forecast maximum and minimum temperature."
},

{
title:"Digital Twin",
desc:"Virtual climate model of India."
},

{
title:"Scenario Simulation",
desc:"Run What-If climate scenarios."
}

]

export default function Features(){

return(

<section className="grid grid-cols-2 gap-8 p-16">

{

features.map((item,index)=>(

<div
key={index}
className="bg-blue-900 rounded-xl p-8 shadow-lg">

<h2 className="text-2xl font-bold">

{item.title}

</h2>

<p className="mt-4 text-gray-300">

{item.desc}

</p>

</div>

))

}

</section>

)

}

