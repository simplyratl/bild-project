import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import ApplicationGrid from "./ApplicationGrid";
import ApplicationList from "./ApplicationList";
import Filter from "./Filter";

const Applications = () => {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState(1);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const [lockSwitch, setLockSwitch] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState("ALL");

    const [lockLoading, setLockLoading] = useState(false);

    const handleScroll = () => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

        if (bottom) {
            setLoading(true);
        }
    };

    const resetResults = () => {
        setPosts([]);
        setPage(1);
        setLockLoading(false);
        setLoading(true);
    };

    const loadStop = () => {
        setLoading(false);
    };

    const setData = (res) => {
        setPosts([...posts, ...res.data]);
        setLoading(false);
        setLockSwitch(false);
    };

    const notFoundData = () => {
        setLoading(false);
        setLockLoading(true);
        setLockSwitch(false);
    };

    const fetchByPage = async () => {
        if (lockSwitch) return;
        if (lockLoading) return loadStop();

        setLockSwitch(true);

        try {
            const res = await axios.get(`http://localhost:4000/posts?_page=${page}&_limit=9`);

            if (res.data.length === 0) {
                notFoundData();
                return;
            }

            setTimeout(() => {
                setData(res);
            }, [1000]);

            setPage(page + 1);

            return res;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchByCategories = async () => {
        if (lockLoading) return loadStop();

        setLockSwitch(true);

        try {
            const res = await axios.get(
                `http://localhost:4000/posts?category=${selectedFilter.toLowerCase()}&_page=${page}&_limit=9`
            );

            if (res.data.length === 0) {
                notFoundData();
                return;
            }

            setTimeout(() => {
                setData(res);
            }, [1000]);

            setPage(page + 1);

            return res;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        resetResults();
    }, [selectedFilter]);

    useEffect(() => {
        if (selectedFilter === "ALL" && loading) {
            fetchByPage();
        } else if (selectedFilter !== "ALL" && loading) {
            fetchByCategories();
        }
    }, [loading, selectedFilter]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className="applications">
            <div className="applications__wrapper">
                <div className="applications__top">
                    <Filter
                        setSelectedFilter={setSelectedFilter}
                        selectedFilter={selectedFilter}
                        lockSwitch={lockSwitch}
                    />

                    <div className="control">
                        <BsGridFill
                            className={`icon ${category === 1 ? "active" : ""}`}
                            onClick={() => setCategory(1)}
                        />
                        <FaBars
                            className={`icon ${category === 2 ? "active" : ""}`}
                            onClick={() => setCategory(2)}
                        />
                    </div>
                </div>

                <div className={`applications__main ${category === 2 ? "list" : ""}`}>
                    <AnimatePresence>
                        {posts.map((post, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                key={index}
                            >
                                {category === 1 ? (
                                    <ApplicationGrid post={post} />
                                ) : (
                                    <ApplicationList post={post} />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <AnimatePresence>
                        {loading && (
                            <motion.div
                                className="loading"
                                initial={{ opacity: 0, width: 0, height: 0 }}
                                animate={{ opacity: 1, width: 46, height: 46 }}
                                exit={{ opacity: 0, width: 0, height: 0 }}
                            >
                                <Oval color="#2ecc71" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {lockLoading && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="error"
                        >
                            No more results. {posts.length} results found.
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Applications;
