class sprite{
	constructor(img, x, y, h, k){
		this.image=new Image()
		this.x=x
		this.y=y
		this.image.src=img
		this.h=h
		this.k=k
	}
	draw(){
		ctx.drawImage(this.image, this.x, this.y, this.h, this.k);
	}
	update(){
		this.draw()
	}
}

let starter="";
let starterid="";
let encpokid="";
let yrhlth=200;
let opphlth=200;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");	
const backg=new sprite("assets/map1.png", 5, 5, 690, 490);
const pro=new sprite("assets/main.png", 0, 0, 100, 100);
start();

function start() {
	ctx.clearRect(0, 0, 800, 600); 
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0, 0, 800, 600);
}

function region(){
	const region = event.target.id;
	document.getElementById("data").style.display="none";
	const newdiv = document.createElement("div");
	newdiv.id="pok";
	newdiv.classList.add("pok");
	document.getElementById("overlay").appendChild(newdiv);
	if(region=="kanto"){
		starters=["bulbasaur","charmander","squirtle"]
		for(let i=0; i<3; i++){
			const inp=document.createElement("div");
			inp.classList.add("container");
			fetch("https://pokeapi.co/api/v2/pokemon/" + starters[i])
			.then(response => {
				const Responsejs = response.json();
				return Responsejs;
			})
			.then(data => {
				pokemon = data;
				num = pokemon.id;
				inp.innerHTML="<div><img height='150' width='150' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png'></div><div>"+starters[i]+"</div><button value="+starters[i]+" id="+num+" class='btn-box' onclick='setstarter()'>Choose</button>";
				document.getElementById("pok").appendChild(inp);
			});
		}
	} else if(region=="johto"){
		starters=["chikorita","cyndaquil","totodile"]
		for(let i=0; i<3; i++){
			const inp=document.createElement("div");
			inp.classList.add("container");
			fetch("https://pokeapi.co/api/v2/pokemon/" + starters[i])
			.then(response => {
				const Responsejs = response.json();
				return Responsejs;
			})
			.then(data => {
				pokemon = data;
				num = pokemon.id;
				inp.innerHTML="<div><img height='150' width='150' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png'></div><div>"+starters[i]+"</div><button value="+starters[i]+" id="+num+" class='btn-box' onclick='setstarter()'>Choose</button>";
				document.getElementById("pok").appendChild(inp);
			});
		}
	} else if(region=="hoenn"){
		starters=["treecko","torchic","mudkip"]
		for(let i=0; i<3; i++){
			const inp=document.createElement("div");
			inp.classList.add("container");
			fetch("https://pokeapi.co/api/v2/pokemon/" + starters[i])
			.then(response => {
				const Responsejs = response.json();
				return Responsejs;
			})
			.then(data => {
				pokemon = data;
				num = pokemon.id;
				inp.innerHTML="<div><img height='150' width='150' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png'></div><div>"+starters[i]+"</div><button value="+starters[i]+" id="+num+" class='btn-box' onclick='setstarter()'>Choose</button>";
				document.getElementById("pok").appendChild(inp);
			});
		}
	} else if(region=="sinnoh"){
		starters=["turtwig","chimchar","piplup"]
		for(let i=0; i<3; i++){
			const inp=document.createElement("div");
			inp.classList.add("container");
			fetch("https://pokeapi.co/api/v2/pokemon/" + starters[i])
			.then(response => {
				const Responsejs = response.json();
				return Responsejs;
			})
			.then(data => {
				pokemon = data;
				num = pokemon.id;
				inp.innerHTML="<div><img height='150' width='150' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png'></div><div>"+starters[i]+"</div><button value="+starters[i]+" id="+num+" class='btn-box' onclick='setstarter()'>Choose</button>";
				document.getElementById("pok").appendChild(inp);
			});
		}
	}
}

function setstarter(){
	starter=event.target.value;
	starterid=event.target.id;
	document.getElementById("pok").remove();
	document.getElementById("data").style.display="block";
	document.getElementById("data").classList.add("container2");
	const startbutton=document.createElement("startbutton");
	startbutton.classList.add("startbutton");
	document.getElementById("data").innerHTML="You have chosen <span style='color:red'>"+ starter +"</span> as your starter Pokemon!";
	const ins=document.createElement("p");
	const but=document.createElement("button");
	ins.innerHTML="You are on the verge to start your own journey with your little buddy, " + starter + "! You may wander around the city using the <span style='color:yellow;'>arrow keys</span>. You may also encounter other pokemon which, you can choose to fight. Good luck!";
	but.innerHTML="Start your journey!";
	but.onclick=startgame;
	document.getElementById("data").appendChild(ins);
	startbutton.appendChild(but);
	document.getElementById("data").appendChild(startbutton);
}

function startgame(){
	document.getElementById("data").remove();
	document.getElementById("overlay").remove();	
	backg.update();
	pro.update();
	window.addEventListener("keydown", move);
}

function move(){
	if(document.getElementById("randgen")!=null){
		const element = document.getElementById("randgen");
		element.remove();
	}
		if(event.key=="ArrowRight"){
			if(pro.x<600)
			{pro.x+=5;
			backg.update();
			pro.update();
			
		}
		} else if(event.key=="ArrowLeft"){
			if(pro.x>10)
			{pro.x-=5;
			backg.update();
			pro.update();
			}
		} else if(event.key=="ArrowUp"){
			if(pro.y>10)
			{pro.y-=5;
			backg.update();
			pro.update();
			}
		} else if(event.key=="ArrowDown"){
			if(pro.y<400)
			{pro.y+=5;
			backg.update();
			pro.update();
			}
		}
		const ifgen=Math.floor(Math.random()*80)+1;
		if(ifgen==1){
			generateRandomPokemon();
		}
}


function generateRandomPokemon(){
	window.removeEventListener("keydown", move);
	yrhlth=200;
	opphlth=200;
	const random=Math.floor(Math.random()*898)+1;
	fetch("https://pokeapi.co/api/v2/pokemon/" + random)
	.then(response => {
		const Responsejs = response.json();
		return Responsejs;
	})
	.then(async data => {
		randpoke = data;
		num1 = randpoke.id;
		encpokid=num1;
		nm=randpoke.name;
		const newpok=document.createElement("div");
		newpok.id="randgen";
		newpok.innerHTML="A wild Pokemon has appeared!"
		newpok.innerHTML="<div><img height='150' width='150' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num1+".png'></div><div>"+nm+"</div><div class='buttons'><button value="+num1+" id="+nm+" class='btn-box' onclick='fight()'>Fight</button><button class='btn-box' id='flee' onclick='flee()'>Flee</button></div>";
		newpok.classList.add("randgen-box");
		document.getElementById("maincon").appendChild(newpok);
	});
}

function flee(){
	window.addEventListener("keydown", move);
	document.getElementById("randgen").remove();
}
function fight(){
	window.removeEventListener("keydown", move);
	encpok=event.target.value;
	poknm=event.target.id;
	document.getElementById("randgen").remove();
	const battle = document.createElement("div");
	battle.id="battle";
	battle.classList.add("battle");
	document.getElementById("maincon").appendChild(battle);
	battlepok(encpok, 50, 400, poknm);
	battlepok(starterid, 200, 50, starter, true);
}

function battlepok(pokid, tp, lf, nm, back=false){
	if(back){
		const min=document.createElement("div");
		min.id="min";
		min.classList.add("min");
		const pokimg=document.createElement("img");
		pokimg.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+pokid+".png"
		pokimg.style.position="absolute";
		pokimg.style.left=lf+"px";
		pokimg.style.top=tp+"px";
		pokimg.style.height="3in";
		pokimg.style.width="3in";
		min.appendChild(pokimg);
		document.getElementById("battle").appendChild(min);
		battleutils();
		healthbar(300, 450, nm, 1);
	} else{
		const enemy=document.createElement("div");
		enemy.id="enemy";
		enemy.classList.add("enemy");
		const pokimg=document.createElement("img");
		pokimg.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokid+".png"
		pokimg.style.position="absolute";
		pokimg.style.left=lf+"px";
		pokimg.style.top=tp+"px";
		pokimg.style.height="3in";
		pokimg.style.width="3in";
		enemy.appendChild(pokimg);
		document.getElementById("battle").appendChild(enemy);
		healthbar(100, 100, nm, 2);
	}

}

function battleutils(){
	const attackbar=document.createElement("div");
	attackbar.id="attackbar";
	attackbar.classList.add("attackbar");
	const attacks=document.createElement("div");
	attacks.id="attacks";
	attacks.classList.add("attacks");
	listattacks(starterid);
	const attacktype=document.createElement("div");
	attacktype.id="attacktype";
	attacktype.classList.add("attacktype");
	attackbar.appendChild(attacks);
	attackbar.appendChild(attacktype);
	document.getElementById("battle").appendChild(attackbar);
}

function listattacks(pokid){
	fetch("https://pokeapi.co/api/v2/pokemon/" + pokid)
	.then(response => {
		const Responsejs = response.json();
		return Responsejs;
	})
	.then(async data => {
		pok = data;
		attacks=pok.moves;
		for(let i=0; i<4; i++){
			const attack=document.createElement("button");
			attack.classList.add("attack");
			attack.value=attacks[i].move.url;
			attack.innerHTML=attacks[i].move.name;
			fetch("https://pokeapi.co/api/v2/move/" + attacks[i].move.name)
			.then(response => {
				const Responsejs = response.json();
				return Responsejs;
			})
			.then(async data=>{
				attack.onmouseenter=function(){
					type=data.type.name;
					document.getElementById("attacktype").innerHTML=type;
				}
				attack.onclick=function(){
					opphlth-=data.power;	
					if(opphlth<=0) opphlth=0;
					document.getElementById("red2").style.width=opphlth+"px";
					const whichattack=document.createElement("div");
					whichattack.id="whichattack";
					whichattack.innerHTML="You used "+data.name+"!";	
					whichattack.classList.add("whichattack");
					document.getElementById("battle").appendChild(whichattack);
					if(opphlth==0){
						const newdiv=document.createElement("div");
						newdiv.id="newdiv";
						newdiv.classList.add("overlay");
						newdiv.innerHTML="The wild pokemon has fainted!"
						const goback=document.createElement("button");
						goback.innerHTML="Go back";
						goback.onclick=function(){
						document.getElementById("attackbar").remove();
						document.getElementById("health").remove();
						document.getElementById("health").remove();
						document.getElementById("enemy").remove();
						document.getElementById("battle").remove();
						document.getElementById("newdiv").remove();
						window.addEventListener("keydown", move);
						}
						newdiv.appendChild(goback);
						document.getElementById("maincon").appendChild(newdiv);
					}
					blockattack();
				}
			})
			document.getElementById("attacks").appendChild(attack);
		}
	});
}

function blockattack(){
	const blockatt=document.createElement("div");
	blockatt.id="block";
	blockatt.classList.add("attackbar");
	blockatt.innerHTML="The wild pokemon is attacking!";
	document.getElementById("battle").appendChild(blockatt);
	setTimeout(oppattack, 1000);
}

function oppattack(){
	document.getElementById("whichattack").remove();
	fetch("https://pokeapi.co/api/v2/pokemon/" + encpokid)
	.then(response => {
		const Responsejs = response.json();
		return Responsejs;
	})
	.then(async data => {
		pok = data;
		attacks=pok.moves;
		const rand=Math.floor(Math.random()*4);
		fetch("https://pokeapi.co/api/v2/move/" + attacks[rand].move.name)
		.then(response => {
			const Responsejs = response.json();
			return Responsejs;
		})
		.then(async data=>{
			yrhlth-=data.power;	
			if(yrhlth<=0) yrhlth=0;
			const whichattack=document.createElement("div");
			whichattack.innerHTML="The wild pokemon used "+data.name+"!";
			whichattack.id="whichattack";
			whichattack.classList.add("whichattack");
			document.getElementById("battle").appendChild(whichattack);
			document.getElementById("red1").style.width=yrhlth+"px";
			if(yrhlth==0){
				const newdiv=document.createElement("div");
				newdiv.id="newdiv";
				newdiv.classList.add("overlay");
				const goback=document.createElement("button");
				newdiv.innerHTML="Your pokemon has fainted!"
				goback.innerHTML="Go back";
				goback.onclick=function(){
				document.getElementById("attackbar").remove();
				document.getElementById("health").remove();
				document.getElementById("health").remove();
				document.getElementById("enemy").remove();
				document.getElementById("battle").remove();
				document.getElementById("newdiv").remove();
				window.addEventListener("keydown", move);
				}
				newdiv.appendChild(goback);
				document.getElementById("maincon").appendChild(newdiv);
			}
			document.getElementById("block").remove();
		})
	})
}



function healthbar(tp, lft, nm, i){
	const health=document.createElement("div");
	health.id="health";
	health.classList.add("health"+i);
	health.style.top=tp+"px";
	health.style.left=lft+"px";
	const name=document.createElement("h2");
	name.innerHTML=nm;
	const grey=document.createElement("div");
	const red=document.createElement("div");
	red.id="red"+i;
	grey.classList.add("grey");
	red.classList.add("red");
	health.appendChild(name);
	health.appendChild(grey);
	health.appendChild(red);
	document.getElementById("battle").appendChild(health);
}

