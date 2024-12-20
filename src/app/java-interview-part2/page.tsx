import React from "react";
import Head from "next/head";
import CodeBlock from "../components/CodeBlock";

const JavaQAInterviewQuestionsPart2: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Head>
        <title>Java QA Automation Interview Questions Part 2</title>
        <meta
          name="description"
          content="Explore the next 10 Java QA Automation interview questions, diving deeper into advanced topics for testing automation."
        />
      </Head>

      <h1 className="text-4xl font-bold mb-6">
        Java QA Automation Interview Questions Part 2
      </h1>
      <p className="mb-6">
        Continuing from Part 1, here are more advanced Java QA Automation
        interview questions to help you excel in your preparation. These
        questions focus on additional frameworks, design patterns, and advanced
        concepts in test automation.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          11. What is the Singleton Design Pattern, and how is it used in test
          automation?
        </h2>
        <p className="mb-4">
          The Singleton Design Pattern ensures that a class has only one
          instance and provides a global point of access to that instance. In
          test automation, this pattern is commonly used to manage WebDriver
          instances, ensuring that only one browser instance is active during
          the test execution.
        </p>
        <p>Example:</p>
        <CodeBlock
          codeString={`public class DriverManager {
  private static WebDriver driver;

  private DriverManager() {}

  public static WebDriver getDriver() {
      if (driver == null) {
          driver = new ChromeDriver();
      }
      return driver;
  }
}`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          12. How do you perform file uploads in Selenium?
        </h2>
        <p className="mb-4">
          File uploads in Selenium can be performed using the{" "}
          <code>sendKeys()</code> method to input the file path into a file
          input element. Ensure that the input element has the{" "}
          <code>type="file"</code> attribute.
        </p>
        <CodeBlock
          codeString={`WebElement uploadElement = driver.findElement(By.id("fileUpload"));
uploadElement.sendKeys("C:\\path\\to\\file.txt");`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          13. What is Parallel Test Execution, and how is it configured in TestNG
          and JUnit?
        </h2>
        <p className="mb-4">
          Parallel test execution allows multiple tests to run simultaneously,
          reducing the overall execution time. This can be configured in
          frameworks like TestNG and JUnit. Below are examples for both:
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Parallel Execution in TestNG
        </h3>
        <p className="mb-4">
          In TestNG, you can configure parallel execution in the{" "}
          <code>testng.xml</code> file using the <code>parallel</code>{" "}
          attribute.
        </p>
        <CodeBlock
          codeString={`<suite name="ParallelTests" parallel="methods" thread-count="4">
  <test name="Test1">
    <classes>
      <class name="tests.SampleTest" />
    </classes>
  </test>
</suite>`}
        />

        <h3 className="text-xl font-semibold mb-4">
          Parallel Execution in JUnit
        </h3>
        <p className="mb-4">
          In JUnit 5 (Jupiter), parallel execution can be configured using the{" "}
          <code>junit-platform.properties</code> file or programmatically. Below
          is an example using the <code>junit-platform.properties</code> file.
        </p>
        <CodeBlock
          codeString={`# Enable parallel test execution
junit.jupiter.execution.parallel.enabled=true
# Set default mode to parallel
junit.jupiter.execution.parallel.mode.default=concurrent
# Use a fixed thread pool strategy
junit.jupiter.execution.parallel.config.strategy=fixed
# Define the number of parallel threads
junit.jupiter.execution.parallel.config.fixed.parallelism=4`}
        />
        <p className="mb-4">
          Here&apos;s an example of a JUnit test class where methods run in parallel:
        </p>
        <CodeBlock
          codeString={`import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ParallelTestExample {

    @Test
    void test1() {
        System.out.println("Running Test 1: " + Thread.currentThread().getName());
        assertTrue(true);
    }

    @Test
    void test2() {
        System.out.println("Running Test 2: " + Thread.currentThread().getName());
        assertTrue(true);
    }

    @Test
    void test3() {
        System.out.println("Running Test 3: " + Thread.currentThread().getName());
        assertTrue(true);
    }

    @Test
    void test4() {
        System.out.println("Running Test 4: " + Thread.currentThread().getName());
        assertTrue(true);
    }
}`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          14. How do you validate tooltips in Selenium?
        </h2>
        <p className="mb-4">
          Tooltips in Selenium can be validated by retrieving the{" "}
          <code>title</code> attribute or the text content of the element that
          displays the tooltip.
        </p>
        <CodeBlock
          codeString={`WebElement tooltipElement = driver.findElement(By.id("tooltip"));
String tooltipText = tooltipElement.getAttribute("title");
System.out.println("Tooltip text: " + tooltipText);`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          15. What is the role of a DataProvider in TestNG?
        </h2>
        <p className="mb-4">
          A DataProvider in TestNG is used to supply multiple sets of data to a
          single test method. It enables data-driven testing by allowing tests
          to run with different input values.
        </p>
        <CodeBlock
          codeString={`@DataProvider(name = "loginData")
public Object[][] getData() {
    return new Object[][] {
        {"user1", "pass1"},
        {"user2", "pass2"}
    };
}

@Test(dataProvider = "loginData")
public void testLogin(String username, String password) {
    System.out.println("Logging in with: " + username + ", " + password);
}`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          16. What are DesiredCapabilities in Selenium?
        </h2>
        <p className="mb-4">
          DesiredCapabilities are used to define properties for a browser
          session, such as browser name, version, and platform. They are
          particularly useful for cross-browser testing and integrating with
          tools like Selenium Grid.
        </p>
        <CodeBlock
          codeString={`DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setBrowserName("chrome");
capabilities.setPlatform(Platform.WINDOWS);
WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          17. How do you handle dropdowns in Selenium?
        </h2>
        <p className="mb-4">
          Dropdowns in Selenium can be handled using the <code>Select</code>{" "}
          class. This class provides methods to select options by index, value,
          or visible text.
        </p>
        <CodeBlock
          codeString={`WebElement dropdown = driver.findElement(By.id("dropdown"));
Select select = new Select(dropdown);
select.selectByVisibleText("Option 1");`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          18. What is the difference between SoftAssert and HardAssert in TestNG?
        </h2>
        <p className="mb-4">
          In TestNG, a HardAssert stops the execution of the test case
          immediately if an assertion fails, whereas a SoftAssert collects all
          assertion failures and reports them at the end of the test.
        </p>
        <CodeBlock
          codeString={`// Using HardAssert
Assert.assertEquals(actual, expected);

// Using SoftAssert
SoftAssert softAssert = new SoftAssert();
softAssert.assertEquals(actual, expected);
softAssert.assertAll();`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          19. How do you perform mouse hover actions in Selenium?
        </h2>
        <p className="mb-4">
          Mouse hover actions in Selenium can be performed using the{" "}
          <code>Actions</code> class. This class provides methods like{" "}
          <code>moveToElement()</code> to simulate mouse interactions.
        </p>
        <CodeBlock
          codeString={`Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("hoverElement"));
actions.moveToElement(element).perform();`}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          20. How do you handle authentication pop-ups in Selenium?
        </h2>
        <p className="mb-4">
          Authentication pop-ups can be handled by embedding the username and
          password in the URL. Alternatively, you can use tools like AutoIT or
          Selenium 4’s new <code>CDP</code> support for advanced handling.
        </p>
        <CodeBlock
          codeString={`// Embedding credentials in URL
String url = "https://username:password@example.com";
driver.get(url);`}
        />
      </section>

      <p className="mb-6">
        By mastering these advanced questions, you can further demonstrate your
        expertise and readiness for a Java QA Automation role. Best of luck!
      </p>
    </div>
  );
};

export default JavaQAInterviewQuestionsPart2;
