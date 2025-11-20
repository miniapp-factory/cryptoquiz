"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function CryptoTrivia() {
  const question = "What is the native cryptocurrency of Ethereum?";
  const answer = "Ether";
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnswer(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Crypto Trivia</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{question}</p>
        {showAnswer && <p className="text-green-600 font-semibold">{answer}</p>}
      </CardContent>
    </Card>
  );
}
