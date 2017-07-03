//  GUID Generator
class generateUUID {
	constructor() {
		let date = new Date().getTime();
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = (date + Math.random() * 16) % 16 | 0;
			date = Math.floor(date / 16);
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return {uuid};
	}
	// UUID Generator(customize)
	serialRandom(){
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	guid() {
		return this.serialRandom() + this.serialRandom() + '-' + this.serialRandom() + '-' + this.serialRandom() + '-' + this.serialRandom() + '-' + this.serialRandom() + this.serialRandom() + this.serialRandom();
	}
}

export default generateUUID;
