package com.revature.project3.controller;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Chart;
import com.revature.project3.dao.ChartRepository;

@RestController
public class GetChartCtrl {

	@Autowired
	DataSource dataSource;
	
	@Autowired
	ChartRepository chartRepo;
	
	@GetMapping(path = "/getChart/{chartId}", produces = "application/json")
	public Chart getChart(@PathVariable String chartId) {
		int chartNum = Integer.parseInt(chartId);
		return chartRepo.findOne(chartNum);
	}
	
//	@GetMapping(path = "/getChart/{boardId}", produces = "application/json")
//	public ResponseEntity<ChartDto> getChartData(HttpServletRequest request) {
//		HttpSession session = request.getSession();
//		Board board = (Board) session.getAttribute("board");
//		//add a findOne by boardId
//		Set<Story> stories = board.getStory();
//		Map<LocalDate, Integer> storyData = new TreeMap<LocalDate, Integer>();
//		int totalPoints = 0;
//
//		for (Story story : stories) {
//			if (story.getLaneType().getLtId() != 1) {
//				totalPoints += story.getStoryPoints();
//			}
//			if (story.getLaneType().getLtId() == 6) {
//				LocalDate doneDate = story.getLastMoveDate().toLocalDate();
//				storyData.put(doneDate, story.getStoryPoints());
//			}
//		}
//		List<String> dataLabels = new ArrayList<>();
//		List<Integer> dataValues = new ArrayList<>();
//		Chart chart = board.getChart();
//		LocalDate startDate = chart.getStartDate().toLocalDate();
//		dataLabels.add(startDate.toString());
//		dataValues.add(totalPoints);
//		LocalDate prevDate = startDate;
//
//		for (Map.Entry<LocalDate, Integer> entry : storyData.entrySet()) {
//			LocalDate currentDate = entry.getKey();
//			Integer points = entry.getValue();
//			if (prevDate.equals(startDate) || prevDate.equals(currentDate)) {
//				prevDate = currentDate;
//				totalPoints -= points;
//			} else {
//				dataLabels.add(prevDate.toString());
//				dataValues.add(totalPoints);
//				prevDate = currentDate;
//				totalPoints -= points;
//			}
//		}
//		dataLabels.add(prevDate.toString());
//		dataValues.add(totalPoints);
//
//		String[] dataLabelsArray = dataLabels.toArray(new String[dataLabels.size()]);
//		int[] dataValuesArray = new int[dataValues.size()];
//		for (int i = 0; i < dataValuesArray.length; i++) {
//			dataValuesArray[i] = dataValues.get(i).intValue();
//		}
//		ChartDatasetDto cdsd = new ChartDatasetDto(dataValuesArray);
//		List<ChartDatasetDto> cdsdList = new ArrayList<>();
//		cdsdList.add(cdsd);
//		ChartDataDto cdd = new ChartDataDto(dataLabelsArray, cdsdList);
//		ChartDto burndownChart = new ChartDto(cdd);
//
//		return new ResponseEntity<ChartDto>(burndownChart, HttpStatus.OK);
//	}
}
