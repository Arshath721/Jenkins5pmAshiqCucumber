package org.userlab;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {

	// 2
	public static void generateJvmReport(String jsonPath) {
		// 2.1
		File f = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\JvmReport");

		// 2.2
		Configuration con = new Configuration(f, "facebook");

		con.addClassifications("Platfrom", "Windows");
		con.addClassifications("Platfrom version", "10");
		con.addClassifications("Browser", "Chrome");
		con.addClassifications("Browser version", "96");
		con.addClassifications("Sprints days", "15");
		con.addClassifications("Sprint", "4");

		// 2.3
		List<String> jsonFile = new ArrayList<String>();

		jsonFile.add(jsonPath);

		// 2.4
		ReportBuilder r = new ReportBuilder(jsonFile, con);

		r.generateReports();

	}

}
