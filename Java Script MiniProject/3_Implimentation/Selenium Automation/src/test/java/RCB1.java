import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class RCB1
{
    public static void main(String args[]) throws Exception
    {
        System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers//chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(System.getProperty("user.dir")+"//Java Script/Views/RCBMainWebsite.html");
        Thread.sleep(2000);
        driver.findElement(By.xpath("/html/body/aside/h3[5]/a")).click();
        driver.findElement(By.id("name")).sendKeys("Sirisha");
        driver.findElement(By.id("password")).sendKeys("Siri123");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"button\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"name\"]")).sendKeys("Bala Sirisha");
        driver.findElement(By.name("email")).sendKeys("Siri12@gmail.com");
        driver.findElement(By.id("phone")).sendKeys("9866678944");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"date\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"date\"]")).sendKeys("20/12/2020");
        driver.findElement(By.id("numofticket")).sendKeys("3");
        driver.findElement(By.id("pricerange")).click();
        driver.findElement(By.xpath("//*[@id=\"button\"]")).click();
        Thread.sleep(3000);
        driver.switchTo().alert().accept();
        //driver.close();
        //driver.close();
    }
    

    

   }