/* Autogenerated with kurento-module-creator */

#include "FactoryRegistrar.hpp"

#include <FaceRecognitionImplFactory.hpp>
#include <FaceRecognition.hpp>

extern "C" {

  const kurento::FactoryRegistrar *getFactoryRegistrar ();

}

const kurento::FactoryRegistrar *
getFactoryRegistrar ()
{
  static bool loaded = false;
  static std::map<std::string, std::shared_ptr<kurento::Factory>> factories;

  if (!loaded) {
    factories["FaceRecognition"] = std::shared_ptr <kurento::Factory> (new kurento::module::facerecognition::FaceRecognitionImplFactory() );

    loaded = true;
  }

  static kurento::FactoryRegistrar factory (factories);
  return &factory;
}
