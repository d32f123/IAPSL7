package Lab7;
import javax.servlet.ServletException;
import javax.servlet.ServletContext;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.io.IOException;

/**
 * Created by 12 on 20.03.2017.
 */
@WebServlet(name = "ControllerServlet", urlPatterns = {"/controller"})
public class ControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	PrintWriter out = response.getWriter();
        String xString=request.getParameter("xBox");
        String yString=request.getParameter("y_coord");
        String rString=request.getParameter("rBox");

        ServletContext context = getServletContext( );
        context.log("No message received:");

       	response.setHeader("Content-Type", "text/html; charset=UTF-8");
	if(xString == null || yString == null || rString == null){
		request.getServletContext().getRequestDispatcher("/lab7.jsp").forward(request, response);
	} else {
		request.getServletContext().getRequestDispatcher("/checking").forward(request, response);	
	}
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher("/checking").forward(request, response);
    }
}
