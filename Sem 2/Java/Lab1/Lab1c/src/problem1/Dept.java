package problem1;

public final class Dept {
    private static final String DEPT_NAME = "SYMCA";

    public String getDeptName() {
        return DEPT_NAME;
    }

//     Uncomment the following setter to allow setting the value during object creation
    
    public Dept() {
         DEPT_NAME = "SYMCA"; // This will cause a compilation error because DEPT_NAME is final
    }
   

    // Uncomment the following setter to allow setting the value during object creation
    
    public Dept(String deptName) {
        if (!DEPT_NAME.equals(deptName)) {
            throw new IllegalArgumentException("Department name cannot be changed from SYMCA.");
        }
    }
   

    // Uncomment the following setter to allow setting the value during object creation
    
    public void setDeptName(String deptName) {
        if (!DEPT_NAME.equals(deptName)) {
            throw new IllegalArgumentException("Department name cannot be changed from SYMCA.");
        }
    }
    
}

