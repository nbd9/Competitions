package com.nbdeg;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.nio.file.Path;
import java.util.Scanner;

/**
 * Created by nbdeg on 4/9/2017.
 */

// https://code.google.com/codejam/contest/3264486/dashboard#s=p1

public class TidyNumbers {
    private static Path inputPath;
    private static Path outputPath;


    TidyNumbers(Path inputPath, Path outputPath) {
        this.inputPath = inputPath;
        this.outputPath = outputPath;
        run();
    }

    private static long solve(long testNum) {
        long currentBest = 0;
        long startTime = System.currentTimeMillis();
        for (long x = 0; x <= testNum; x++) {
            StringBuilder currentNumBuilder = new StringBuilder();
            long currentHighest = 0;
            String stringNum = String.valueOf(x);
            for (int i = 0; i < stringNum.length(); i++) {
                char c = stringNum.charAt(i);
                long currentNum = Long.parseLong(String.valueOf(c));
                if (currentNum >= currentHighest) {
                    currentHighest = currentNum;
                    currentNumBuilder.append(currentNum);
                    if (i == stringNum.length()-1) {
                        currentBest = Long.parseLong(currentNumBuilder.toString());
                    }
                } else {
                    break;
                }
            }
        }
        return currentBest;
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
            long testNum = Long.parseLong(scanner.nextLine());
            System.out.println("Input: " + testNum);
            writer.println(String.format("Case #%d: %s", x, solve(testNum)));
        }
        scanner.close();
        writer.close();
    }
}
