
let settings = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: "Kumbh Sans",
    color: "orange",
};

let settingsDefault = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: "Kumbh Sans",
    color: "orange",

}

const form = document.getElementsByTagName('form')[0];
const apply = document.getElementById('apply');
const applybg = document.getElementById('applybg');
const settingsContainer = document.getElementById('settingscontainer');
const circle = document.querySelector('#ring > circle');
const close = document.getElementById('close');

close.addEventListener('click', ()=>{
    settingsContainer.style.visibility = 'hidden';
    settingsContainer.style.opacity = '0';
})

document.querySelector('#settings > img').addEventListener('click', ()=>{
    settingsContainer.style.visibility = "visible";
    settingsContainer.style.opacity = 1;
})

const mapSettings = (setting, val) => {
    settings[setting] = val;
    document.querySelectorAll("form h2, form h4, #apply").forEach((item)=>{
        item.style.fontFamily = settings.font;
    });
    applybg.style.backgroundColor = `var(--${settings.color})`;
 
}

const updateSettings = () => {
    navBg.style.backgroundColor = `var(--${settings.color})`;
    circle.style.stroke = `var(--${settings.color})`;
    document.body.style.fontfamily = settings.font;

    timer.pomodoro = settings.pomodoro;
    this.shortBreak = settings.shortBreak;
    this.longBreak = settings.longBreak;

    timer.reset();
}


const inc = (input) =>{
  const inputEl =document.getElementById(input);
  inputEl.stepUp(1);
  mapSettings(input, inputEl.value);
}
const dec = (input) =>{
    const inputEl =document.getElementById(input);
    inputEl.stepDown(1);
    mapSettings(input, inputEl.value);
  }
// document.getElementById('settingsoverlay').addEventListener('click', () =>{
//     settingsContainer.style.opacity = 1;
// })

const fontButtons = document.querySelectorAll('.font');

fontButtons.forEach((btn) => {
    
    btn.addEventListener('click', (e)=>{
       fontButtons.forEach((button) =>{
           button.classList.remove('fontactive')

           btn.classList.add('fontactive');

           if(btn.classList.contains('kumbh')){
               mapSettings('font', 'kumbh Sans');
           }
           else if(btn.classList.contains('roboto')){
            mapSettings('font', '"Roboto Slab", serif');
           }else {
            mapSettings('font', '"Space Mono", monospace');
           }
       })
    })
})

const colors = document.querySelectorAll('.color');

colors.forEach((color) => {
    color.addEventListener('click', (e)=>{
    
          if(color.classList.contains('orange')){
               mapSettings('color', 'orange');
           }
           else if(color.classList.contains('blue')){
            mapSettings('color', 'cyan');
            console.log(e.currentTarget);
           }else {
            mapSettings('color', 'purple');
           }

           colors.forEach((color) =>{
            color.classList.remove('coloractive');
            
       })
       color.classList.add('coloractive');
    })
})

applybg.addEventListener('click', (e)=>{
    e.preventDefault();
    updateSettings();
    settingsDefault = settings;
    settingsContainer.style.visibilty = 'hidden';
    settingsContainer.style.opacity = 0;
})


