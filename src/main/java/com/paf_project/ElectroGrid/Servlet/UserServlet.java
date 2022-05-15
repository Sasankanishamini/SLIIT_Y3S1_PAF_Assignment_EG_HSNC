package com.paf_project.ElectroGrid.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.paf_project.ElectroGrid.Business.UserService;
import com.paf_project.ElectroGrid.Model.User;
import com.paf_project.ElectroGrid.ViewModel.ResponseViewModel;

import jakarta.servlet.annotation.WebServlet;

@WebServlet("/user")

public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	
    public UserServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		UserService userService = new UserService();
		List <User> users = userService.getUsers();
		
		if (users != null) {
			
			request.setAttribute("users", users);
			request.getRequestDispatcher("User.jsp").forward(request, response);
		}
		
	}
		
		
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			
		
			UserService userService=new UserService();
			User user = new User();

			String name = request.getParameter("name");
			String nic = request.getParameter("nic");
			String address = request.getParameter("address");
			int phone = Integer.parseInt(request.getParameter("phone"));
			String email = request.getParameter("email");
			
			
			user.setName(name);				
			user.setNic(nic);
			user.setAddress(address);
			user.setPhone(phone);
			user.setEmail(email);
			

			ResponseViewModel responseViewModel = userService.addUser(user);

			response.getWriter().write(responseViewModel.message);
			}
	
	
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

		String userId = request.getParameter("id");

		try {
		
		Connection con = DriverManager.getConnection("jdbc:mysql://locahost:3306/electrogriddb", "root", "12345");
		PreparedStatement ps = con.prepareStatement("DELETE FROM `electrogriddb`.`user` WHERE (`id` = ?);");
		ps.setString(1, "name");



		int i = ps.executeUpdate();



		if(i > 0) {
		System.out.println("User successfully removed...");
		}



		} catch (Exception e) {
		System.out.println(e);
		}
	}
	
	
}
		
