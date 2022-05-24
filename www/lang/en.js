var langEN = {
	greeting: "Hello",
	title: "Title",
	header: "Campanella - Bell management system",
	languageText: "Language:",
	settings: "Settings",
	status: "Status",
	home: "Home",
	credits: "Credits / Info",
	projectDescription: "Presentazione del progetto: ",
	quickguide: "Guida all'utilizzo di Campanella",
	quickguideContent: "\
		<strong>Campanella</strong> is an open-source bell management system designed for schools.<br>\
		It can control the bells of a school through the internet.<br>\
		With user-friendly interface you can manage a system of RaspberryPi’s.<br>\
		You have only to connect a loudspeaker or the classic school bell to the RaspberryPi and you are ready!<br>\
		Using a single software for all the bells, the managing becomes very easy: all the school bells will ring at the same time and in a few seconds you will be able to change the timetable.<br>\
		The software is very versatile and can plan different timetables: daily, weekly, monthly or whatever.<br>\
		The software automatically syncronizes the internal clock with a remote atomic clock using the NetworkTimeProtocol.<br>\
		The software is designed for schools but is suitable for a lot more applications!<br>\
		",
	updateSettings: "Aggiornare le impostazioni?",
	helpText: "\
	<li>\
	</br>\
	</br>\
	</br>\
	Disable or enable the bell.</br>\
	<i>Default: enabled</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	Enter the times for the bell to ring\
	Write the time in the format aaaa-MM-gg hh:mm:ss or w hh:mm:ss dove w è between tra 1 e 7, and indicates the day of the week (eg 1 = Monday) or in the format hh:mm:ss to make the bell ring every day.\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	</br>\
	<b>\
	Enter the time when the raspberry pi should synchronize the internal clock with the server NTP</br>\
	NOTE:</br>\
	this procedure takes 35 seconds during which the bell is temporarily disabled.</br>\
	In case of lack of internet connection or in case of wrong NTP address the synchronization fails and NO error is reported on the status page</br>\
	</b>\
	It is recommended to set the time at night</br>\
	<i>Default: 02:00:00</i>\
	</br>\
	</br>\
	</br>\
	</br>\
	The NTP server to synchronize the time with\
	</br>\
	The recommended server is ntp1.inrim.it from the Sample Time and Frequency Laboratory.\
	</br>\
	Default: ntp1.inrim.it\
	</br>\
	</br>\
	</br>\
	</br>\
	Il volume della campanella<br>\
	Max: 4         Min: -100\
	</br>\
	<b>\
	NOTA:\
	</br>\
	The volume of the bell in dB, therefore it is logarithmic\
	</br>\
	</b>\
\
	<i>Default: 4</i>\
	</br>\
	</br>\
	Select to ring the bell now\
	</br>\
	</br>\
	Select to synchronize the internal clock with the server now NTP\
	</br>\
	</br>\
	</br>\
	</br>\
	</li>\
	<li></li>\
	",
	helpTitle: " Help ",
	creditsTitle: "Credits: ",
	creditsText: "\
	<br><br>\
	The Python program was written by<strong> Michele Lizzit.</strong><br>\
	The CSS was written by <strong>Daniele Toppano e Marco Ferrari.</strong><br>\
	HTML was written by <strong>Michele Lizzit e Daniele Toppano.</strong><br>\
	PHP was written by<strong>Michele Lizzit.</strong><br>\
	The logo \"CopernicoDrin\" è stato creato da <strong>Marco Ferrari.</strong><br>\
	The software for LCD control was written by<strong>Michele Lizzit.</strong><br><br>\
	Michele Lizzit<br> <i>michele@lizzit.it - <a href=\"https://lizzit.it\">lizzit.it</a></i><br>\
	Daniele Toppano <br><i>danitoppano@gmail.com</i><br>\
	Marco Ferrari <br><i>marcogio99@gmail.com</i><br>\
	<br>\
	The computer that manages the bell and the server is a Raspberry PI model B con Raspbian<br>\
	The software is written inPHP e Python<br>\
	The LCD display is managed by an Arduino UNO board which reads the data, via serial, fromRaspberryPi<br>\
	Last software modification 26/04/2016<br>\
	<br>\
	The software is licensed GNU AGPLv3, the source is free to download from <a href=\"https://lizzit.it/campanella\">lizzit.it/campanella</a>\
	",
	settingsTitle: "Change your settings: ",
	settingsReset: "Reset",
	settingsUpdate: "Update settings",
	settingsRingNow: "	Ring the bell NOW",
	settingsVolume: "Volume (da -100 a 4)",
	settingsTime: "Time to synchronize the ntp server in the format hh:mm:ss",
	settingsNTP: "Server NTP",
	settingsSound: "Set sound",
	settingsNTPnow: "Update NTP NOW",
	settingsEnable: "Enable/Disable campanella",
	settingsEnabledText: "Enabled",
	settingsDisabledText: "Disabled",
	settingsTimetable: "Timetables",
	statusServer: "Server status information",
	statusUSB: "Check USB ports",
	statusSDspace: "Space used in the SD:",
	statusSD: "Memoria SD:",
	statusRAM: "RAM:",
	statusOptions: "Content of file OPTIONS.txt",
	statusErrors: "Server errors:",
	statusNetwork: "Network status",
	statusTitle: "System status: ",
	rebootConfirm: "Are you sure to reboot/shut down the system?",
	usbStatus: "Indication of the USB status of the server",
	textBack: "Back",
	guideTitle: "Project presentation: ",
	guideContent: "\
	The software runs on Raspberry PI Model A or B and on any Linux machine.<br>\
	For more information on the software please visit:\
	<a href=\"https://lizzit.it/campanella\">https://lizzit.it/campanella</a>\
	",
	uploadText: "Upload",
	updateSettings: "Settings",
	uploadTitle: "Upload a new sound to the server: ",
	uploadInfo: "NOTE: Only files are accepted .wav",
	uploadLabel: "Upload your file:",
	updateTitle: "Update settings: ",
	updateSystemReboot: "The system will restart, please wait.",
	updateDone: "The system is functional.",
	homeText: "Home",
	title404: "404 Not Found: ",
	text404: "	The file is not present on this server",
	selectSoundDeleteAllButton: "Delete all sounds",
	selectSoundSetButton: "Set the sound",
	selectSoundUpload: "	Upload a new sound to the server",
	selectSoundDeleteButton: "Delete selected sound",
	selectSoundTitle: "Sound management panel",
	selectSoundInfo: "Here you can set the sound played by the speakers.",
	selectSoundDelete: "Delete a sound in memory",
	selectSoundSetInfo: "Set the sound"

};
