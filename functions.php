<?php

function template($name)
{
    require $_SERVER['DOCUMENT_ROOT'] . '/templates/' . $name . '.php';
}