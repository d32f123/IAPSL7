package Lab7;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.json.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.io.StringReader;



@WebServlet(name = "AreaCheckServlet", urlPatterns = "/checking")
public class AreaCheckServlet extends HttpServlet {

    private ServletConfig config;
    private List<Point> list=null;

    @Override
    public void init(ServletConfig config) throws ServletException
    {
        this.config = config;
    }

    @Override
    public void destroy() {}

    @Override
    public ServletConfig getServletConfig()
    {
        return config;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(list==null) {
            list=new ArrayList<Point>();
            config.getServletContext().setAttribute("list", list);
        }
        response.setContentType("text/html");
	
	PrintWriter out = response.getWriter();
	

        String[] xStrings = request.getParameterValues("xBox");
        Integer[] xValues = new Integer[xStrings.length];
        for (int i = 0; i < xStrings.length; ++i)
        {
            xValues[i] = Integer.parseInt(xStrings[i]);
        } 
        
        for (int i = 0; i < xValues.length; ++i)
        {
            int currX = xValues[i];
            int currY = Integer.parseInt(request.getParameter("y_coord"));
            int currR = Integer.parseInt(request.getParameter("rBox"));
            list.add(new Point(currX, currY));
            list.get(list.size() - 1).R = Integer.parseInt(request.getParameter("rBox"));
            if (checkArea(list.get(list.size() - 1).x, list.get(list.size() - 1).y, list.get(list.size() - 1).R))
            {
                list.get(list.size() - 1).isInArea = true;
            }
            else
            {
                list.get(list.size() - 1).isInArea = false;
            }
        }

        response.sendRedirect("/lab7/lab7.jsp");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        if(list==null) {
            list=new ArrayList<Point>();
            config.getServletContext().setAttribute("list", list);
        }
        String delete = request.getParameter("delete");
        if (delete != null && delete.matches("true"))
        {
            list.clear();
            response.sendRedirect("/lab7/lab7.jsp");
        }
        else
        {
            PrintWriter out=response.getWriter();
            String xString = request.getParameter("x_coord");
            String yString = request.getParameter("y_coord");
            String rString = request.getParameter("rBox");


            JsonReader jsonReader = Json.createReader(new StringReader(xString));
            JsonArray x_array = jsonReader.readArray();
            jsonReader = Json.createReader(new StringReader(yString));
            JsonArray y_array = jsonReader.readArray();
            int r = Integer.parseInt(rString);

            JsonArrayBuilder result = Json.createArrayBuilder();

            for (int i = 0; i < x_array.size(); ++i)
            {
                double x = x_array.getJsonNumber(i).doubleValue();
                double y = y_array.getJsonNumber(i).doubleValue();
                boolean isInArea = checkArea(x, y, r);
                list.add(new Point(x, y, r, isInArea));
                result.add(isInArea);
            }
            JsonArray res = result.build();

            out.println(res);
        }
    }

    public class Point {

        public double x;
        public double y;
        public boolean isInArea;
        public  int R;
    
        Point(double x,double y) {
            this.x=x;
            this.y=y;
        }

        Point(double x, double y, int R, boolean isInArea)
        {
            this.x = x;
            this.y = y;
            this.R = R;
            this.isInArea = isInArea;
        }
    }

    public static boolean checkArea(double x, double y, int R) {
        if(x<=0&&y<=0&&x>=-R/2.0&&y>=-R){
            return true;
        }
        if(x<=0&&y>=0&&y<=x/2+R/2.0){
            return true;
        }
        if(x>=0&&y<=0&&x*x+y*y<=R*R/4.0){
            return true;
        }
        return false;
    }
}
