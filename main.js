document.getElementById('main-wrapper')
	.style.display = '';
let postHeaderClass = document
	.getElementsByClassName(
		'post-header');
let ourpostHeaderElement =
	postHeaderClass[0];
let descOfProg =
	"<p style='color:white;text-align:center'>Domain Idea Generator is Web Tool created by Yunus Emre Vurgun. This tool lets you generate unlimited idead for domain names, for you to use!</p><br/><br/>";
let HTMLForm =
	" <form id='form1'> <label for='favDom'>Your Favorite Domain (with www and .com/.org etc. included, without https): </label><br/><br/><input type='text' id='favDom' name='favDom'><br/><br/> <br/><label for='provider'>Your Favorite Animal: </label><br> <br/><input type='text' id='provider' name='provider'> <br/><br/><br/><input type='submit' value='Generate Domain Idea' onclick='PassGenerator()' id='buttonGen'><center><p id='warnArea'></center></p> ";
let results = '%UD%';
let resultBox =
	"<br><br><br><br><center><div id='resultBox' style='width:50%;border:2px solid white;border-radius:5px;'>Your Domain:<br><br>" +
	results + "</div></center><br><br>";
ourpostHeaderElement.innerHTML =
	'<div style="padding-top:1vw;color: white; text-align: center;  text-shadow: orange 1px 1px 1px, blue 0px 1px 1px, rgb(0, 0, 0) 2px 1px 1px;"> <h1 style="color:#d0ff00; " class="post-title" id="titleBig"> &nbsp;Domain Idea Generator</h1>' +
	descOfProg + HTMLForm + resultBox +
	'</div>';
$('#form1').submit(function(e) {
	e.preventDefault()
});
document.getElementById('resultBox')
	.style.display = 'none';
document.getElementById('favDom').style
	.backgroundColor = '#570000';
document.getElementById('provider')
	.style.backgroundColor = '#570000';
document.getElementById('favDom').style
	.color = 'white';
document.getElementById('provider')
	.style.color = 'white';
document.getElementById('buttonGen')
	.style.fontSize = '20px';
document.getElementById('buttonGen')
	.style.backgroundColor =
	'#1ed760';
document.getElementById('buttonGen')
	.style.color = 'white';
document.getElementById('buttonGen')
	.style.border = '2px solid white';
document.getElementById('buttonGen')
	.style.borderRadius = '15px';

function PassGenerator() {
	let favDomainAreaID = document
		.getElementById('favDom');
	let favoriteAnimalID = document
		.getElementById('provider');
	let favDOMAIN = favDomainAreaID.value;
	let yourfavanimal = favoriteAnimalID
		.value;
	let result = null;
	let elseList = false;
	let matchCheckForIntegersInFavAnimal =
		yourfavanimal.match(/\d/);
	let matchCheckForWWWinDomainArea =
		favDOMAIN.match(/www./);
	let detectUppercaseInAnimal =
		yourfavanimal.match(/[A-Z]/);
	let detectUppercaseInDomain =
		favDOMAIN.match(/[A-Z]/);
	let
		forbiddenCharactersInBothDomainANDanimal = [
			"$", "€", "£", "^", ":", "\\",
			"/", ";", "%", "+", "=", "<",
			">", "_", "#", ",", "!", "(", ")",
			"*",
			"@", "‘", "&", "}",
			"{", "[", "]", "~", "|"
		];

	function findForbiddensInBoth() {
		for (i = 0; i <
			forbiddenCharactersInBothDomainANDanimal
			.length; i++) {
			let thisChar =
				forbiddenCharactersInBothDomainANDanimal[
					i];
			if (favDOMAIN.includes(
					thisChar)) {
				return 1;
			}
		}
		for (i = 0; i <
			forbiddenCharactersInBothDomainANDanimal
			.length; i++) {
			let thisChar =
				forbiddenCharactersInBothDomainANDanimal[
					i];
			if (yourfavanimal.includes(
					thisChar)) {
				return 1;
			}
		}
	}
	let acceptedPopularTLDsList = [
		".aero",
		".az",
		".ba",
		".bb",
		".bd",
		".be",
		".bf",
		".bg",
		".bh",
		".bi",
		".bj",
		".bm",
		".bn",
		".bo",
		".br",
		".bs",
		".bt",
		".bv",
		".bw",
		".by",
		".bz",
		".ca",
		".cc",
		".cd",
		".cf",
		".cg",
		".ch",
		".ci",
		".ck",
		".cl",
		".cm",
		".cn",
		".co",
		".cr",
		".cs",
		".cu",
		".cv",
		".cx",
		".cy",
		".cz",
		".dd",
		".de",
		".dj",
		".dk",
		".dm",
		".do",
		".dz",
		".ec",
		".ee",
		".eg",
		".eh",
		".er",
		".es",
		".et",
		".eu",
		".fi",
		".fj",
		".fk",
		".fm",
		".fo",
		".fr",
		".ga",
		".gb",
		".gd",
		".ge",
		".gf",
		".gg",
		".gh",
		".gi",
		".gl",
		".gm",
		".gn",
		".gp",
		".gq",
		".gr",
		".gs",
		".gt",
		".gu",
		".gw",
		".gy",
		".hk",
		".hm",
		".hn",
		".hr",
		".ht",
		".hu",
		".id",
		".ie",
		".il",
		".im",
		".in",
		".io",
		".iq",
		".ir",
		".is",
		".it",
		".je",
		".jm",
		".jo",
		".jp",
		".ke",
		".kg",
		".kh",
		".ki",
		".asia",
		".biz",
		".cat",
		".com",
		".coop",
		".info",
		".int",
		".jobs",
		".mobi",
		".museum",
		".name",
		".net",
		".org",
		".pro",
		".tel",
		".travel",
		".xxx",
		".edu",
		".gov",
		".mil",
		".ac",
		".ad",
		".ae",
		".af",
		".ag",
		".mp",
		".mq",
		".mr",
		".ms",
		".mt",
		".mu",
		".mv",
		".mw",
		".mx",
		".my",
		".mz",
		".na",
		".nc",
		".ne",
		".nf",
		".ng",
		".ni",
		".nl",
		".no",
		".np",
		".nr",
		".nu",
		".nz",
		".om",
		".pa",
		".pe",
		".pf",
		".pg",
		".ph",
		".pk",
		".pl",
		".ai",
		".al",
		".am",
		".an",
		".ao",
		".aq",
		".ar",
		".as",
		".at",
		".au",
		".aw",
		".ax",
		".km",
		".kn",
		".kp",
		".kr",
		".kw",
		".ky",
		".kz",
		".la",
		".lb",
		".lc",
		".li",
		".lk",
		".lr",
		".ls",
		".lt",
		".lu",
		".lv",
		".ly",
		".ma",
		".mc",
		".md",
		".me",
		".mg",
		".mh",
		".mk",
		".ml",
		".mm",
		".mn",
		".mo",
		".si",
		".sj",
		".sg",
		".sh",
		".ug",
		".uk",
		".us",
		".uy",
		".uz",
		".va",
		".vc",
		".ve",
		".vg",
		".vi",
		".vn",
		".vu",
		".wf",
		".ws",
		".ye",
		".yt",
		".yu",
		".sk",
		".sl",
		".sm",
		".sn",
		".so",
		".sr",
		".ss",
		".st",
		".su",
		".sv",
		".sy",
		".sz",
		".tc",
		".td",
		".tf",
		".tg",
		".th",
		".tj",
		".tk",
		".tl",
		".tm",
		".tn",
		".to",
		".tp",
		".tr",
		".tt",
		".tv",
		".tw",
		".tz",
		".ua",
		".pm",
		".pn",
		".pr",
		".ps",
		".pt",
		".pw",
		".py",
		".qa",
		".re",
		".ro",
		".rs",
		".ru",
		".rw",
		".sa",
		".sb",
		".sc",
		".sd",
		".se",
		".za",
		".zm",
		".zw"
	];
	let decider;

	function findAcceptableTLD() {
		for (i = 0; i <
			acceptedPopularTLDsList
			.length; i++) {
			let thisTLD =
				acceptedPopularTLDsList[i];
			if (favDOMAIN.includes(thisTLD)) {
				decider = 0;
				return;
			} else {
				decider = 1;
			}
		}
	}
	findAcceptableTLD();
	if (favDOMAIN.includes(" ") ||
		yourfavanimal.includes(" ") ||
		matchCheckForIntegersInFavAnimal !=
		null ||
		matchCheckForWWWinDomainArea ==
		null ||
		detectUppercaseInAnimal != null ||
		detectUppercaseInDomain !=
		null || findForbiddensInBoth() ==
		1 ||
		decider == 1
	) {
		elseList = true;
	}
	if (favDOMAIN.length == 0 ||
		yourfavanimal.length == 0 ||
		favDOMAIN
		.length > 50 || yourfavanimal
		.length >
		50 || elseList == true) {
		alert(
			'Please enter values that don\'t have spaces, all lowercase, less than 50 characters, and don\'t leave any field empty. Favorite animal field' +
			'can NOT have numeric values, domain field MUST have www and a valid well known TLD. Domain name also needs to be old school valid. You can not have a domain name such as i_am&do**mainçö.net'
		);
		window.location.href =
			'https://tools.yunusemrevurgun.com/p/domain-idea-generator.html';
	} else {
		let randomDomainWord = [
			"@!", "@^^", "+%", "@(", "?*",
			"a86%", "3h++3", "+__-_",
			"%=",
			"?=_",
			",/£!",
			"a456^+"
		];
		let randlen = randomDomainWord
			.length;
		let elementIndex1 = Math.floor(Math
			.random() * randlen);
		let elementIndex2 = Math.floor(Math
			.random() * randlen);
		let resultData = randomDomainWord[
			elementIndex1];
		let resultData2 = randomDomainWord[
			elementIndex2];
		let math1 = Math.random() * 10;
		favDOMAIN = favDOMAIN + parseInt(
			math1);
		favDOMAIN = favDOMAIN + resultData;
		let math2 = Math.random() * 10;
		math2 = Math.floor(math2);
		result = resultData2 + math2 +
			favDOMAIN + resultData2 +
			yourfavanimal + math2;

		function reverseResult(
			resultInput) {
			let splitEachLetter = resultInput
				.split("");
			let reverseThis = splitEachLetter
				.reverse();
			let reJoinLetters = reverseThis
				.join();
			return reJoinLetters;
		}
		result = reverseResult(result);
		result = result.length;
		let resultLength = result;
		let favAnimalFirst3Letters =
			yourfavanimal.slice(0, 3);
		let favAni = favAnimalFirst3Letters;
		let lotteryLessThan60 = favAni;
		let lotteryElse = favAni.split("")
			.reverse().join("");

		function resultMaker() {
			if (resultLength > 10 &&
				resultLength < 60) {
				return lotteryLessThan60;
			} else {
				return lotteryElse;
			}
		}
		let usePrevLengthAsLottery =
			resultMaker();
		let justDomainName =
			usePrevLengthAsLottery + '-' +
			resultLength;
		let justWWW = "www.";

		function findTLD() {
			for (i = 0; i <
				acceptedPopularTLDsList
				.length; i++) {
				let currentElement =
					acceptedPopularTLDsList[i];
				if (favDOMAIN.includes(
						currentElement)) {
					return currentElement;
				}
			}
		}
		result = justWWW + justDomainName +
			findTLD();
	}
	document.getElementById('resultBox')
		.style.fontSize = '20px';
	document.getElementById('resultBox')
		.style.display = '';
	document.getElementById('resultBox')
		.innerText = document
		.getElementById('resultBox')
		.innerText.replaceAll(
			'%UD%', result);
	document.getElementById('resultBox')
		.style.backgroundColor =
		'#4f3400';
	document.getElementById('buttonGen')
		.style.display = 'none';
	document.getElementById('warnArea')
		.innerText =
		"*Refresh the page to generate another one.";
	document.getElementById('warnArea')
		.style.color = "white";
	document.getElementById('warnArea')
		.style.borderRadius = "10px";
	document.getElementById('warnArea')
		.style.backgroundColor = "black";
	document.getElementById('warnArea')
		.style.width = "50%";
	document.getElementById('warnArea')
		.style.textAlign = "center";
	document.getElementById('warnArea')
		.style.textShadow = "";
	document.getElementById('warnArea')
		.style.fontSize = "18px";
}
