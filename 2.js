class student {
    constructor(name ,email ) {
        this.name = name;
        this.email =email;
        this.courses = [];
        
    }
    enroll(course){
        this.courses.push(course);
        console.log(`${this.name} has enroll in ${this.courses}`);

    }
    showCourses(){
        console.log(`${this.name} 's enrolled courses:${this.courses.join(",")}`);
    }
}

class Admission{
    constructor(){
        this.students =[]

    }
    enrollStudent (student){
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);

    }
    assignCourese(student,course){
        if(student instanceof student && student.email && course){
            student.enroll(course);
        }
        else{
            console.log("invailed student or course information.");

        }
    }
 showEnrolledStudents(){
    console.log('enrolled students:-');
    this.students.forEach(student => {
        console.log(`${student.name} ${student.email}`);
    });
    }
}
const admissionOffice = new Admission();


const student1 = new Student('Mithun', 'mak@pw.live');
const student2 = new Student('Farman', 'pk@pw.live');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);


admissionOffice.assignCourses(student1, 'Mathematics');
admissionOffice.assignCourses(student2, 'History');

admissionOffice.showEnrolledStudents();


student1.showCourses();
student2.showCourses();
admissionOffice.showEnrolledStudents();