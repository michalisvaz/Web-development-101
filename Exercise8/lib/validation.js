// Add autocomplete options for Country input
var countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
var options = "";

for (var i = 0; i < countryList.length; i++) {
	var current = countryList[i];
	options += '<option value="' + countryList[i] + '" />';
}

document.getElementById("countries").innerHTML = options;

// Do the same for programming languages.
var languages = ["A.NET (A#/A sharp)", "A-0 System", "A+ (A (plus)", "ABAP", "ABC", "ABC ALGOL", "ACC", "Accent (Rational Synergy)", "Ace DASL (Distributed Application Specification Language)", "Action!", "ActionScript", "Actor", "Ada", "Adenine (Haystack)", "AdvPL", "Agda", "Agilent VEE (Keysight VEE)", "Agora", "AIMMS", "Aldor", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice (Alice ML)", "Alma-0", "AmbientTalk", "Amiga E", "AMOS (AMOS BASIC)", "AMPL", "AngelScript", "Apache Pig latin", "Apex (Salesforce.com ", "APL", "App Inventor for Android's visual block language (MIT App Inventor)", "AppleScript", "APT", "Arc", "ARexx", "Argus", "Assembly language (ASM)", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "B", "Babbage", "Ballerina", "Bash", "BASIC", "Batch file (Windows/MS-DOS)", "bc (basic calculator)", "BCPL", "BeanShell", "Bertrand", "BETA", "BLISS", "Blockly", "BlooP", "Boo", "Boomerang", "Bosque", "C", "C--", "C++", "C*", "C#", "C/AL", "Caché ObjectScript", "C Shell (csh)", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "Cg", "Ch", "Chapel", "Charm", "CHILL", "CHIP-8", "ChucK", "Cilk", "Control Language", "Claire", "Clarion", "Clean", "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL", "CobolScript", "Cobra", "CoffeeScript", "ColdFusion", "COMAL", "Combined Programming Language (CPL)", "COMIT", "Common Intermediate Language (CIL)", "Common Lisp (CL)", "COMPASS", "Component Pascal", "Constraint Handling Rules (CHR)", "COMTRAN", "Cool", "Coq", "Coral 66", "CorVision", "COWSEL", "CPL", "Cryptol", "Crystal", "Csound", "Cuneiform", "Curl", "Curry", "Cybil", "Cyclone", "Cypher Query Language", "Cython", "CEEMAC", "D", "Dart", "Darwin", "DataFlex", "Datalog", "DATATRIEVE", "dBase", "dc", "DCL (DIGITAL Command Language)", "Delphi", "DinkC", "DIBOL", "Dog", "Draco", "DRAKON", "Dylan", "DYNAMO", "DAX (Data Analysis Expressions)", "E", "Ease", "Easy PL/I", "EASYTRIEVE PLUS", "eC", "ECMAScript", "Edinburgh IMP", "EGL", "Eiffel", "ELAN", "Elixir", "Elm", "Emacs Lisp", "Emerald", "Epigram", "EPL (Easy Programming Language)", "EPL (Eltron Programming Language)", "Erlang", "es", "Escher", "ESPOL", "Esterel", "Etoys", "Euclid", "Euler", "Euphoria", "EusLisp Robot Programming Language", "CMS EXEC (EXEC)", "EXEC 2", "Executable UML", "Ezhil", "F", "F# (F sharp)", "F*", "Factor", "Fantom", "FAUST", "FFP", "fish", "Fjölnir", "FL", "Flavors", "Flex", "Flix", "FlooP", "FLOW-MASTIC (B0)", "FOCAL (Formulating On-Line Calculations in Algebraic Language/FOrmula CALculator)", "FOCUS", "FOIL", "FORMAC (FORMula MAnipulation Compiler)", "@Formula", "Forth", "Fortran – ISO/IEC 1539", "Fortress", "FP", "Franz Lisp", "Futhark", "F-Script", "Game Maker Language (Scripting language)", "GameMonkey Script", "GAMS (General Algebraic Modeling System)", "GAP", "G-code", "GDScript (Godot)", "Genie", "GDL (Geometric Description Language)", "GEORGE", "GLSL (OpenGL Shading Language)", "GNU E", "GNU Guile (GNU Ubiquitous Intelligent Language for Extensions)", "Go", "Go!", "GOAL (Game Oriented Assembly Lisp)", "Gödel", "Golo", "GOM (Good Old Mad)", "Google Apps Script", "Gosu", "GOTRAN (IBM 1620)", "GPSS (General Purpose Simulation System)", "GraphTalk (Computer Sciences Corporation)", "GRASS", "Grasshopper", "Groovy (programming language)|Groovy (Apache Groovy)", "Hack", "HAGGIS", "HAL/S", "Halide (programming language)", "Hamilton C shell", "Harbour", "Hartmann pipelines", "Haskell", "Haxe", "Hermes", "High Level Assembly (HLA)", "HLSL", "Hollywood", "HolyC (TempleOS)", "Hop", "Hopscotch", "Hope", "Hugo (Interactive Fiction/IF)", "Hume", "HyperTalk", "Io", "Icon", "IBM Basic assembly language", "IBM HAScript", "IBM Informix-4GL", "IBM RPG", "IDL", "Idris", "Inform", "J", "J# (J sharp)", "J++ (J plus plus)", "JADE", "Jai", "JAL", "Janus (concurrent constraint programming language)", "Janus (time-reversible computing programming language)", "JASS", "Java", "JavaFX Script", "JavaScript(Scripting language)", "Jess (programming language)", "JCL", "JEAN", "Join Java", "JOSS", "Joule", "JOVIAL", "Joy", "JScript", "JScript .NET", "Julia", "Jython", "K", "Kaleidoscope", "Karel", "KEE", "Kixtart", "Klerer-May System", "KIF (Knowledge Interchange Format)", "Kojo", "Kotlin", "KRC", "KRL", "KRL (KUKA Robot Language)", "KRYPTON", "KornShell (ksh)", "Kodu", "Kv (Kivy)", "LabVIEW", "Ladder", "LANSA", "Lasso", "Lava", "LC-3", "Lean", "Legoscript", "LIL", "LilyPond", "Limbo", "Limnor", "LINC", "Lingo", "LINQ", "LIS", "LISA", "Language H", "Lisp – ISO/IEC 13816", "Lite-C", "Lithe", "Little b", "LLL", "Logo", "Logtalk", "LotusScript", "LPC", "LSE", "LSL", "LiveCode", "LiveScript", "Lua", "Lucid", "Lustre", "LYaPAS", "Lynx", "	M2001", "M4", "M#", "Machine code", "MAD (Michigan Algorithm Decoder)", "MAD/I", "Magik", "Magma", "Máni", "Maple", "MAPPER (now part of BIS)", "MARK-IV (now VISION:BUILDER)", "Mary", "MATLAB", "MASM Microsoft Assembly x86", "MATH-MATIC", "Maude system", "Maxima (see also Macsyma)", "Max (Max Msp – Graphical Programming Environment)", "MaxScript internal language 3D Studio Max", "Maya (MEL)", "MDL", "Mercury", "Mesa", "MHEG-5 (Interactive TV programming language)", "Microcode", "MicroScript", "Microsoft Power Fx", "MIIS", "Milk (programming language)", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "MSL", "MUMPS", "MuPAD", "Mutan", "Mystic Progra", "NASM", "Napier88", "Neko", "Nemerle", "NESL", "Net.Data", "NetLogo", "NetRexx", "NewLISP", "NEWP", "Newspeak", "NewtonScript", "Nial", "Nickle (NITIN)", "Nim", "Nix (Systems configuration language)", "NPL", "Not eXactly C (NXC)", "Not Quite C (NQC)", "NSIS", "Nu", "NWScript", "o:XML", "Oak", "Oberon", "OBJ2", "Object Lisp", "ObjectLOGO", "Object REXX", "Object Pascal", "Objective-C", "Objective-J", "Obliq", "OCaml", "occam", "occam-π", "Octave", "OmniMark", "Opa", "Opal", "OpenCL", "OpenEdge ABL", "OPL", "OpenVera", "OPS5", "OptimJ", "Orc", "ORCA/Modula-2", "Oriel", "Orwell", "Oxygene", "Oz", "	", "", "P", "P4", "P′′", "ParaSail (programming language)", "PARI/GP", "Pascal – ISO 7185", "Pascal Script", "PCASTL", "PCF", "PEARL", "PeopleCode", "Perl", "PDL", "Pharo", "PHP", "Pico", "Picolisp", "Pict", "Pike", "PILOT", "Pipelines", "Pizza", "PL-11", "PL/0", "PL/B", "PL/C", "PL/I – ISO 6160", "PL/M", "PL/P", "PL/SQL", "PL360", "PLANC", "Plankalkül", "Planner", "PLEX", "PLEXIL", "Plus", "POP-11", "POP-2", "PostScript", "PortablE", "POV-Ray SDL", "Powerhouse", "PowerBuilder", "PowerShell", "PPL", "Processing", "Processing.js", "Prograph", "PROIV", "Project Verona", "Prolog", "PROMAL", "Promela", "PROSE modeling language", "PROTEL", "ProvideX", "Pro*C", "Pure", "Pure Data", "PureScript", "Python", "	Q (programming language from Kx Systems)", "Q# (Microsoft programming language)", "Qalb", "Quantum Computation Language", "QtScript", "QuakeC", "R", "R++", "Racket", "Raku", "RAPID", "Rapira", "Ratfiv", "Ratfor", "RemObjects Mercury", "rc", "Reason", "REBOL", "Red", "Redcode", "REFAL", "REXX", "Rlab", "ROOP", "RPG", "RPL", "RSL", "RTL/2", "Ruby", "Rust", "S", "S2", "S3", "S-Lang", "S-PLUS", "SA-C", "SabreTalk", "SAIL", "SAS", "SASL", "Sather", "Sawzall", "Scala", "Scheme", "Scilab", "Scratch", "Script.NET", "Sed", "Seed7", "Self", "SenseTalk", "SequenceL", "Serpent", "SETL", "SIMPOL", "SIGNAL", "SiMPLE", "SIMSCRIPT", "Simula", "Simulink", "Singularity", "SISAL", "SLIP", "SMALL", "Smalltalk", "SML", "Strongtalk", "Snap!", "SNOBOL (SPITBOL)", "Snowball", "SOL", "Solidity", "SOPHAEROS", "Source", "SPARK", "Speakeasy", "Speedcode", "SPIN", "SP/k", "SPS", "SQL", "SQR", "Squeak", "Squirrel", "SR", "S/SL", "Starlogo", "Strand", "Stata", "Stateflow", "Subtext", "SBL", "SuperCollider", "SuperTalk", "Swift (Apple programming language)", "Swift (parallel scripting language)", "SYMPL", "SystemVerilog", "T", "TACL", "TACPOL", "TADS (Text Adventure Development System)", "TAL", "Tcl", "Tea", "TECO (text Editor and Corrector)", "TELCOMP", "TeX", "TEX (Text Executive Programming Language)", "TIE", "TMG (TransMo Griffer), compiler-compiler", "Tom", "Toi", "Topspeed (Clarion)", "TPU (text Processing Utility)", "Trac", "TTM", "T-SQL (Transact-SQL)", "Transcript (LiveCode)", "TTCN (Tree and Tabular Combined Notation)", "Turing", "TUTOR (PLATO Author Language)", "TXL", "TypeScript", "Tynker", "Ubercode", "UCSD Pascal", "Umple", "Unicon", "Uniface", "UNITY", "Unix shell", "UnrealScript", "Vala", "Verilog", "VHDL", "Vim script", "Viper (Ethereum/Ether (ETH))", "Visual DataFlex", "Visual DialogScript", "Visual FoxPro", "Visual J++ (Visual J plus plus)", "Visual LISP", "Visual Objects", "Visual Prolog", "WATFIV, WATFOR (WATerloo FORtran IV)", "WebAssembly", "WebDNA", "Whiley", "Winbatch", "Wolfram Language", "Wyvern", "X++ (X plus plus/Microsoft Dynamics AX)", "X10", "xBase", "xBase++ (xBase plus plus)", "XBL", "XC (targets XMOS architecture)", "xHarbour", "XL", "Xojo", "XOTcl", "Xod", "XPL", "XPL0", "XQuery", "XSB", "XSharp (X#)", "XSLT", "Xtend", "Yorick", "YQL", "Yoix", "YUI", "Z notation", "Zebra, ", " ZPL", "Zeno", "ZetaLisp", "Zig", "ZOPL", "ZPL", "Z++"];
options = "";

for (var i = 0; i < languages.length; i++) {
	let current = languages[i];
	options += '<option value="' + languages[i] + '" />';
}

document.getElementById("languages").innerHTML = options;

// Use of Constraint Validation API to do more complicated checks

// Check first password being strong enough
function checkPassword() {
	let password1 = document.getElementById("password1_id");
	let valid = false;
	let capsFlag = false, symbolFlag = false, numberFlag = false;
	let password = password1.value;

	// iterate password
	for (let i = 0; i < password.length; i++) {
		let c = password[i];
		if (c >= 0 && c <= 9) {
			numberFlag = true;
		} else if (c >= 'A' && c <= 'Z') {
			capsFlag = true;
		} else if (c >= 'a' && c <= 'z') {
			continue;
		} else {
			symbolFlag = true;
		}
	}

	// get final validation flag
	valid = capsFlag && numberFlag && symbolFlag && (password.length >= 8);
	if (!valid) {
		password1.setCustomValidity("Password must contain at least one number, one symbol and one capital letter and be at least 8 characters long");
	} else {
		password1.setCustomValidity("");
	}
}

// Check that the two passwords match
function checkPasswordMatch() {
	let password1 = document.getElementById("password1_id");
	let password2 = document.getElementById("password2_id");

	let valid = password1.value === password2.value;
	if (!valid) {
		password2.setCustomValidity("Passwords should match (and they don't)");
	} else {
		password2.setCustomValidity("");
	}
}

// Check that the user typed an existing country
function checkCountry() {
	let country = document.getElementById("country_id");
	let name = country.value;

	let valid = !name || name.length === 0 || countryList.includes(name.trim());
	if (!valid) {
		country.setCustomValidity("You must give an existing country (or none)");
	} else {
		country.setCustomValidity("");
	}
}

// Check that the user gave correct bloodtype
function chechBloodType() {
	let validBloodTypes = [];
	let options = document.getElementById("blood_types").options;
	for (let i = 0; i < options.length; i++) {
		let current = options[i].value;
		validBloodTypes.push(current);
	}

	let fieldBlood = document.getElementById("blood_type_id");
	let typedBloodValue = fieldBlood.value.trim();

	let valid = !typedBloodValue || typedBloodValue.length === 0 || validBloodTypes.includes(typedBloodValue);
	if (!valid) {
		fieldBlood.setCustomValidity("Either give a correct blood type, or none");
	} else {
		fieldBlood.setCustomValidity("");
	}
}

// Check that email is valid
function checkEmail() {
	let emailInput = document.getElementById("mail_id");
	let email = emailInput.value;

	const re = /^\S+@\S+[\.][0-9a-z]+$/;
	let valid = String(email).match(re);
	if (!valid) {
		emailInput.setCustomValidity("Please enter a valid email");
	} else {
		emailInput.setCustomValidity("");
	}
}

// Function to call the separate checks
function checks() {
	checkPassword();
	checkPasswordMatch();
	checkCountry();
	chechBloodType();
	checkEmail();
}