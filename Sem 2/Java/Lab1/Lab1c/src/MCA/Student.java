package MCA;

public class Student {
	String name, dept;
	int uid, cgpa, marks;
	public Student(String name, int uid, String dept, int cgpa, int marks) {
		this.name = name;
		this.uid = uid;
		this.dept=dept;
		this.cgpa= cgpa;
		this.marks = marks;
	}
	public void display() {
		System.out.println("name of student : " + name);
		System.out.println("department of student : " + dept);
		System.out.println("cgpa of student : " + cgpa);
		System.out.println("uid of student : " + uid);
	}
}
