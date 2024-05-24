//DOM manipulation// variables

const btn = document.querySelector('.mybtn');
const title = document.querySelector('.realcontent');
const law = document.querySelector('.theory');
const scientist = document.querySelector('.name');

const laws = [{
    title: `Law of Gravitation`,
    law: ` Objects attract each other with a force directly proportional to the product of the masses of the objects and inversely proportional to the square of the distance between them. Hence, for objects on or near the earth, the mass of the earth is very much greater than the object, and so the gravitational force between them makes objects fall towards the earth`,
    scientist: `Isaac Newton`
},{
    title: `Newton’s First law of Motion`,
    law: `A body continues in its state of rest, or of uniform motion in a straight line, except in so far as it is compelled by external impressed forces to change that state`,
    scientist: `Isaac Newton`
},{
    title: `Newton’s Second Law of Motion `,
    law: `<em>The rate of change of momentum is proportional to the impressed force and takes place in the direction of the straight line in which the force acts.<em>`,
    scientist: `Isaac Newton`
},{
    title: `Newton’s Third Law of Motion`,
    law: `To every action there is equal and opposite reaction`,
    scientist: `Isaac Newton`
},{
    title: `Coulomb’s Law `,
    law: `The force between the two electric charges reduces to a quarter of its former value when the distance between them is doubled`,
    scientist: `Charles Augustin de Coulomb`
},{
    title: `Pascal’s Law `,
    law: `When pressure is applied to a fluid, the pressure change is transmitted to every part of the fluid without loss`,
    scientist: `Blaise Pascal`
},{
    title: `Hooke's Law`,
    law: `This law states that the extension of a spring is proportional to the tension stretching it. Doubling of the tension results in the doubling of the amount of stretch.`,
    scientist: ` Robert Hooke`
},{
    title: ` Boyles's Law`,
    law: `It states that temperature remaining constant, volume of a given mass of a gas varies inversely with the pressure of the gas.`,
    scientist: `Neil Boyle`
},{
    title: `Ohm's Law`,
    law: `The current through a conductor between two points is directly proportional to the voltage across the two points (V = IR).`,
    scientist: `Georg Simon Ohm`
},{
    title: `Hubble's Law`,
    law: `The recessional velocity of galaxies is proportional to their distance from us, indicating the expansion of the universe (v = H₀d).`,
    scientist: `Edwin Hubble`
},];

btn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * laws.length);

    law.innerHTML = laws[random].law;
    title.innerHTML = laws[random].title;
    scientist.innerHTML = laws[random].scientist;

});
