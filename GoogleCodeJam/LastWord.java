package com.nbdeg;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Created by nbdeg on 4/7/2017.
 */

// https://code.google.com/codejam/contest/4304486/dashboard#s=p0

public class LastWord {
    private static Path inputPath;
    private static Path outputPath;

    private static Map<String, Integer> getPointValues() {
        Map<String, Integer> pointValues = new HashMap<String, Integer>();
        pointValues.put("A", 1);
        pointValues.put("B", 2);
        pointValues.put("C", 3);
        pointValues.put("D", 4);
        pointValues.put("E", 5);
        pointValues.put("F", 6);
        pointValues.put("G", 7);
        pointValues.put("H", 8);
        pointValues.put("I", 9);
        pointValues.put("J", 10);
        pointValues.put("K", 11);
        pointValues.put("L", 12);
        pointValues.put("M", 13);
        pointValues.put("N", 14);
        pointValues.put("O", 15);
        pointValues.put("P", 16);
        pointValues.put("Q", 17);
        pointValues.put("R", 18);
        pointValues.put("S", 19);
        pointValues.put("T", 20);
        pointValues.put("U", 21);
        pointValues.put("V", 22);
        pointValues.put("W", 23);
        pointValues.put("X", 24);
        pointValues.put("Y", 25);
        pointValues.put("Z", 26);
        return pointValues;
    }

    LastWord(Path inputPath, Path outputPath) {
        this.inputPath = inputPath;
        this.outputPath = outputPath;
        run();
    }

    private static String solve(String word) {
        StringBuilder currentBestWord = new StringBuilder();
        Map<String, Integer> pointValues = getPointValues();
        int firstLetter = 0;

        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            int pointValue = pointValues.get(String.valueOf(c));
            if (pointValue >= firstLetter) {
                currentBestWord.insert(0, c);
                firstLetter = pointValue;
            } else {
                currentBestWord.append(c);
            }
        }
        System.out.println(currentBestWord.toString());
        return currentBestWord.toString();
    }

    private static void run() {
        Scanner scanner = null;
        PrintWriter writer = null;

        try {
            scanner = new Scanner(inputPath.toFile());
            writer = new PrintWriter(outputPath.toFile(), "UTF-8");
        } catch (FileNotFoundException | UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        int t = Integer.parseInt(scanner.nextLine());
        for (int x = 1; x <= t; x++) {
            String word = scanner.nextLine();
            System.out.println("Input: " + word);
            writer.println(String.format("Case #%d: %s", x, solve(word)));
        }
        scanner.close();
        writer.close();
    }
}
