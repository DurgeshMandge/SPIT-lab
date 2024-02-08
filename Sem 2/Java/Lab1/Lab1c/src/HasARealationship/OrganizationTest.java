package HasARealationship;

public class OrganizationTest {
	 public static void main(String[] args) {
	     // Create departments
	     Department hrDepartment = new Department("HR", "1st Floor");
	     Department itDepartment = new Department("IT", "2nd Floor");

	     // Create an organization
	     Department[] departments = {hrDepartment, itDepartment};
	     Organization organization = new Organization("XYZ Corp", departments);

	     // Display organization details
	     System.out.println("Organization Name: " + organization.getName());
	     System.out.println("Departments:");
	     for (Department dept : organization.getDepartments()) {
	         System.out.println("Department: " + dept.getName() + ", Location: " + dept.getLocation());
	     }
	 }
	}
