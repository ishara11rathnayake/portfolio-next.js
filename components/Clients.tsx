"use client";

import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/InfiniteMoingCrads";
import {companies, testimonials} from "@/data";

const Clients = () => {
    return (
        <section className="py-20" id="testimonials">
            <h1 className="heading">
                Kind words from{" "}
                <span className="text-purple">colleagues</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[50vh] md:h-[30rem] rounded-md flex-col antialiased items-center relative overflow-hidden">
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
                </div>
            </div>
        </section>
    );
};

export default Clients;
