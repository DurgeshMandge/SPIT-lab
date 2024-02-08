package HasARealationship;

//Organization class
class Organization {
private String name;
private Department[] departments;

public Organization(String name, Department[] departments) {
   this.name = name;
   this.departments = departments;
}

public String getName() {
   return name;
}

public Department[] getDepartments() {
   return departments;
}
}
