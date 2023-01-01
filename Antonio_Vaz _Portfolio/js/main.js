

// STARTING THE SMOOTH SCROLLBAR
const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'));

// CREATING A DELAY FUNCTION
function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
  }

//LETTING THE NAV BAR FIXED TO THE TOP

const fixedElem = document.getElementById('navbar');

scrollbar.addListener( status => {
  const offset = status.offset
  
  fixedElem.style.top = offset.y + 'px';
})

// CREATING THE MOVE UP DOWN ON TOUCH OF THE NAVBAR

//GO TO HOME SECTION
function goToHome(){
	scrollbar.removeListener(checkAbout);
	scrollbar.removeListener(checkProjects);
	scrollbar.removeListener(checkContact);

	const home = document.getElementById('home');
	scrollbar.scrollIntoView(home);
}
	
//GO TO ABOUT SECTION
function goToAbout(){
	scrollbar.removeListener(checkHome);
	scrollbar.removeListener(checkProjects);
	scrollbar.removeListener(checkContact);

	let aboutText = document.getElementsByClassName('textToChange')[0];
	aboutText.innerHTML = 'Hello, Im António Vaz from Lisbon in Portugal. I´m eighteen years old and I can create a few designs if needed, but my true passion is programming. I´m currently working on front-end development, but I´m hoping to be a full stack developer in the near future. If you´re interested in learning more about me, click on the icons. Thanks for taking the time to explore.';

	const about = document.getElementById('about');
	scrollbar.scrollIntoView(about);
}

//GO TO PROJECTS SECTION
function goToProjects(){
	scrollbar.removeListener(checkHome);
	scrollbar.removeListener(checkAbout);
	scrollbar.removeListener(checkContact);

	const projects = document.getElementById('projects');  
	scrollbar.scrollIntoView(projects);
}

//GO TO CONTACT SECTION
function goToContact(){
	scrollbar.removeListener(checkHome);
	scrollbar.removeListener(checkAbout);
	scrollbar.removeListener(checkProjects);

	const contact = document.getElementById('contact');
	scrollbar.scrollIntoView(contact);
}

//CHECK IF IT CAN SEE THE HOME
function checkHome(){
	var element = document.querySelector('#code-start');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById("nav-home").innerHTML = "Home";
		document.getElementById('nav-home').style.color = '#fff'
		document.getElementById("nav-about").innerHTML = "//About";
		document.getElementById('nav-about').style.color = '#4a4a4a'
		document.getElementById("nav-projects").innerHTML = "//Projects";
		document.getElementById('nav-projects').style.color = '#4a4a4a'
		document.getElementById("nav-contact").innerHTML = "//Contact";
		document.getElementById('nav-contact').style.color = '#4a4a4a'
		scrollbar.addListener(checkAbout);
		scrollbar.addListener(checkProjects);
		scrollbar.addListener(checkContact);
	}
  
  else{
	document.getElementById("nav-home").innerHTML = "//Home";
    document.getElementById('nav-home').style.color = '#4a4a4a'
  }
}

//CHECK IF IT CAN SEE THE ABOUT
let seeAbout = false;
function checkAbout(){
	var element = document.querySelector('.code-about');
	var position = element.getBoundingClientRect();

	if(position.top >= 4 && position.bottom <= window.innerHeight) {
		document.getElementById("nav-home").innerHTML = "//Home";
		document.getElementById('nav-home').style.color = '#4a4a4a'
		document.getElementById("nav-about").innerHTML = "About";
		document.getElementById('nav-about').style.color = '#000'
		document.getElementById("nav-projects").innerHTML = "//Projects";
		document.getElementById('nav-projects').style.color = '#4a4a4a'
		document.getElementById("nav-contact").innerHTML = "//Contact";
		document.getElementById('nav-contact').style.color = '#4a4a4a'
		scrollbar.addListener(checkHome);
		scrollbar.addListener(checkProjects);
		scrollbar.addListener(checkContact);
		seeAbout = true;
	}
	else{
		document.getElementById("nav-about").innerHTML = "//About";
		document.getElementById('nav-about').style.color = '#4a4a4a'
	}
}

//CHECK IF IT CAN SEE THE PROJECTS
function checkProjects(){
	var element = document.querySelector('.middle-point');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById("nav-home").innerHTML = "//Home";
		document.getElementById('nav-home').style.color = '#4a4a4a';
		document.getElementById("nav-about").innerHTML = "//About";
		document.getElementById('nav-about').style.color = '#4a4a4a'
		document.getElementById("nav-projects").innerHTML = "Projects";
		document.getElementById('nav-projects').style.color = '#fff'
		document.getElementById("nav-contact").innerHTML = "//Contact";
		document.getElementById('nav-contact').style.color = '#4a4a4a'
		scrollbar.addListener(checkHome);
		scrollbar.addListener(checkAbout);
		scrollbar.addListener(checkContact);
	}
  
  else{
	document.getElementById("nav-projects").innerHTML = "//Projects";
    document.getElementById('nav-projects').style.color = '#4a4a4a';
  }
}

//CHECK IF IT CAN SEE THE CONTACT
function checkContact(){
	var element = document.querySelector('.footer-text');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById("nav-home").innerHTML = "//Home";
		document.getElementById('nav-home').style.color = '#4a4a4a'

		document.getElementById("nav-about").innerHTML = "//About";
		document.getElementById('nav-about').style.color = '#4a4a4a'

		document.getElementById("nav-projects").innerHTML = "//Projects";
		document.getElementById('nav-projects').style.color = '#4a4a4a'

		document.getElementById("nav-contact").innerHTML = "Contact";
		document.getElementById('nav-contact').style.color = '#fff'
		scrollbar.addListener(checkHome);
		scrollbar.addListener(checkAbout);
		scrollbar.addListener(checkProjects);
	}

	if(position.top < window.innerHeight && position.bottom >= 0) {
		document.getElementById("nav-contact").innerHTML = "Contact";
		document.getElementById('nav-contact').style.color = '#fff'
		scrollbar.addListener(checkHome);
		scrollbar.addListener(checkAbout);
		scrollbar.addListener(checkProjects);
	}
  
  else{
	document.getElementById("nav-contact").innerHTML = "//Contact";
    document.getElementById('nav-contact').style.color = '#4a4a4a'
  }
}

scrollbar.addListener(checkHome);
scrollbar.addListener(checkAbout);
scrollbar.addListener(checkProjects);
scrollbar.addListener(checkContact);

//MAKE THE FOLLOW MOUSE DIV
var followingCircle = document.getElementsByClassName('circleFollowMouse')[0];

$(document).on('mousemove', function(e){

	delay(100).then(() => {
		$('.circleFollowMouse').css({
			left:  e.pageX,
			top:   e.pageY
		 });
	});

});

//CREATE THE ANIMATION OF THE SPHERE TO THE BACK OF THE ABOUT SECTION
let runAboutAnimation = false;
function lastSphereAnimation(){
	if (seeAbout==true){
		let sphere = document.getElementsByClassName('sphere')[0];
		sphere.classList.add('sphereAnimationClass');
		scrollbar.removeListener(lastSphereAnimation);
		runAboutAnimation = true;
		delay(700).then(() => explosionAnimation());
		delay(2000).then(() => {
			sphere.style.visibility = 'hidden';
			sphere.style.display = 'none';
		});
	}
}
scrollbar.addListener(lastSphereAnimation);

//CREATE THE START EXPLOSION OF THE ABOUT SECTION
function explosionAnimation(){
	document.getElementsByClassName('boat')[0].style.animation="boatAnimation 1s ease-in-out 0ms 1 forwards";
	document.getElementsByClassName('book')[0].style.animation="booknimation 1s ease-in-out 0ms 1 forwards";
	document.getElementsByClassName('footbal')[0].style.animation="footbalAnimation 1s ease-in-out 0ms 1 forwards";
	document.getElementsByClassName('music')[0].style.animation="musicAnimation 1s ease-in-out 0ms 1 forwards";
	document.getElementsByClassName('paper_plane')[0].style.animation="paper_planeAnimation 1s ease-in-out 0ms 1 forwards";
	document.getElementsByClassName('peice_puzzle')[0].style.animation="peice_puzzleAnimation 1s ease-in-out 0ms 1 forwards";
	setTimeout(moveUpDown, 1100);
}
function moveUpDown(){
	document.querySelector('.svg').style.zIndex = '9'
	document.getElementsByClassName('boat')[0].style.animation="boatUpDownAnimation 1s ease-in-out 0ms infinite alternate";
	document.getElementsByClassName('book')[0].style.animation="bookUpDownnimation 1s ease-in-out 0ms infinite alternate";
	document.getElementsByClassName('footbal')[0].style.animation="footbalUpDownAnimation 1s ease-in-out 0ms infinite alternate";
	document.getElementsByClassName('music')[0].style.animation="musicUpDownAnimation 1s ease-in-out 0ms infinite alternate";
	document.getElementsByClassName('paper_plane')[0].style.animation="paper_planeUpDownAnimation 1s ease-in-out 0ms infinite alternate";
	document.getElementsByClassName('peice_puzzle')[0].style.animation="peice_puzzleUpDownAnimation 1s ease-in-out 0ms infinite alternate";

}

let aboutText = document.getElementsByClassName('textToChange')[0];

//CHANGE TEXT ON ICON TOUCH 
function changeBoat(){
	aboutText.innerHTML = 'Well, what I have to say is that I also like fishing.';
}
function changeMusic(){
	aboutText.innerHTML = 'Who doesn´t like music? I don´t know why, but I simply enjoy listening to music.';
}
function changeBook(){
	aboutText.innerHTML = 'I love to learn and my ambition for the future is to become a full-stack developer';
}
function changeFootbal(){
	aboutText.innerHTML = 'Who also doesn´t love some sports even if is watching or playing I love it';
}
function changePuzzle(){
	aboutText.innerHTML = 'Give me a hard challenge and I will make it easy as a four piece puzzle';
}
function changeAirplane(){
	aboutText.innerHTML = 'Traveling is just the thing I most like of course after programming';
}


//START COPY TO CLIPBOARD
new ClipboardJS('.email-container');