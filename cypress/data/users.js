function User (first, last, email, doctorLocation, sevirity, smile) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.doctorLocation = doctorLocation;
    this.sevirity = sevirity;
    this.smile = smile;
};

const knownUser = new User("gilad","dana","gilad2904@gmail.com","11111","crowding","moderate",);


module.exports = {
    knownUser,
    };