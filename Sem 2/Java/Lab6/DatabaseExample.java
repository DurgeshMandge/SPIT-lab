import java.sql.*;

public class DatabaseExample {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/lab5";
    private static final String USER = "root";
    private static final String PASSWORD = "nita";

    public static void main(String[] args) {

        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASSWORD)) {
            createTable(conn);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASSWORD)) {
            // Create operation
            createRecord(conn, "Ram", 22);

            // // Read operation
            readRecords(conn);

            // // Update operation
            updateRecord(conn, 1, "Updated name", 30);

            // // Delete operation
            // deleteRecord(conn, 2);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    private static void createTable(Connection conn) throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS persons ("
                + "id INT AUTO_INCREMENT PRIMARY KEY, "
                + "name VARCHAR(255) NOT NULL, "
                + "age INT NOT NULL)";

        Statement statement = conn.createStatement();
        statement.executeUpdate(sql);
        System.out.println("Table created successfully.");
    }

    private static void createRecord(Connection conn, String name, int age) throws SQLException {
        String sql = "INSERT INTO persons (name, age) VALUES (?, ?)";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, name);
        statement.setInt(2, age);
        statement.executeUpdate();
        System.out.println("Record created successfully.");
    }

    private static void readRecords(Connection conn) throws SQLException {
        String sql = "SELECT id, name, age FROM persons";
        Statement statement = conn.createStatement();
        ResultSet resultSet = statement.executeQuery(sql);
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            int age = resultSet.getInt("age");
            System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
        }
    }

    private static void updateRecord(Connection conn, int id, String newName, int newAge) throws SQLException {
        String sql = "UPDATE persons SET name = ?, age = ? WHERE id = ?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, newName);
        statement.setInt(2, newAge);
        statement.setInt(3, id);
        statement.executeUpdate();
        System.out.println("Record updated successfully.");
    }

    private static void deleteRecord(Connection conn, int id) throws SQLException {
        String sql = "DELETE FROM persons WHERE id = ?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setInt(1, id);
        statement.executeUpdate();
        System.out.println("Record deleted successfully.");
    }
}