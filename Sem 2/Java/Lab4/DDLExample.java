import java.sql.*;

public class DDLExample {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/";

    // Database credentials
    static final String USER = "root";
    static final String PASS = "nita";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
            // Register JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            // Execute DDL operations
            System.out.println("Creating database...");
            stmt = conn.createStatement();
            String sql = "CREATE DATABASE IF NOT EXISTS Employee";
            stmt.executeUpdate(sql);
            System.out.println("Database created successfully");

            // Select the database
            sql = "USE Employee";
            stmt.executeUpdate(sql);

            // Create table
            System.out.println("Creating table...");
            sql = "CREATE TABLE IF NOT EXISTS EmployeeDetails " +
                    "(id INT PRIMARY KEY AUTO_INCREMENT, " +
                    " name VARCHAR(255), " +
                    " age INT)";
            stmt.executeUpdate(sql);
            System.out.println("Table created successfully");

            // Alter table to add column
            System.out.println("Altering table to add column...");
            sql = "ALTER TABLE EmployeeDetails ADD COLUMN department VARCHAR(255)";
            stmt.executeUpdate(sql);
            System.out.println("Table altered successfully");

            // Drop table
            System.out.println("Dropping table...");
            sql = "DROP TABLE EmployeeDetails";
            stmt.executeUpdate(sql);
            System.out.println("Table dropped successfully");

        } catch (SQLException se) {
            // Handle errors for JDBC
            se.printStackTrace();
        } catch (Exception e) {
            // Handle errors for Class.forName
            e.printStackTrace();
        } finally {
            // Finally block to close resources
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se2) {
            } // nothing we can do
            try {
                if (conn != null) conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            } // end finally try
        } // end try
        System.out.println("DDL operations completed");
    }
}
