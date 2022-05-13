package com.paf_project.ElectroGrid.Servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.google.gson.Gson;
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
		
		/*
		String action = request.getServletPath();
		
		switch (action) {
		case "/new":
			showNewForm(request, response);
			break;
		case "/insert":
			break;
		case "/delete":
			break;
		case "/edit":
			break;
		case "/update":
			break;
		default:
			break;
		 		
		}
	}
	
	private void showNewForm(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("User.jsp");
		dispatcher.forward(request, response);
	}
	
	
	private void addUser(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException{
		String name = request.getParameter("name");
		String nic = request.getParameter("nic");
		String address = request.getParameter("address");
		String phone = request.getParameter("phone");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		User newUser = new User(name, nic, address, email, password);
		ResponseViewModel.addUser(newUser);
		response.sendRedirect("list");
		
	}
	*/

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//doGet(request, response);		
		
	/*	Map<String, Object> map = new HashMap <String, Object>();
		boolean isValid = false;
		String name = request.getParameter("name");
		if (name !=null && name.trim().length()!=0){
			isValid = true;
			
			map.put("name", name);
		}
		
		map.put("isValid", isValid);
		write(response,map);
		
	}
		private void write(HttpServletResponse response, Map<String, Object> map) throws IOException {
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(new Gson().toJson(map));
			
		}
	
	

*/
		
		
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
	
}
		
